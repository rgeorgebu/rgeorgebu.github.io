const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const RenderPlugin = require('./render-plugin.js');
const path = require('path');
const walk = require('./walk.js');

const entryPoints = walk('src')
	.filter((f) => !f.match(/.*_.*$/) && f.match(/\.js$/))
	.reduce(
		(agg, f) => ({
			...agg,
			[f.replace(/^src\//, '').replace(/\.js$/, '')]: `./${f}`,
		}),
		{}
	);

module.exports = (_, argv) => {
	const isProd = argv.mode === 'production';
	return {
		target: isProd ? 'node' : 'web',
		entry: entryPoints,
		output: {
			clean: true,
			library: {
				type: 'commonjs',
			},
		},
		module: {
			rules: [
				{
					test: /\.js?$/,
					use: [
						{
							loader: 'babel-loader',
							options: {
								presets: [
									[
										'@babel/preset-env',
										{
											targets: isProd
												? { node: 'current' }
												: '> 2%, not dead',
										},
									],
									[
										'@babel/preset-react',
										{ runtime: 'automatic' },
									],
								],
							},
						},
						{
							loader: 'val-loader',
							options: {
								executableFile: path.resolve(
									isProd
										? 'prod-inject.js'
										: 'local-inject.js'
								),
							},
						},
					].filter(Boolean),
					exclude: /node_modules/,
				},
				{
					test: /\.css$/,
					use: [
						isProd ? MiniCssExtractPlugin.loader : 'style-loader',
						{
							loader: 'css-loader',
							options: {
								modules: true,
							},
						},
						'postcss-loader',
					],
				},
			],
		},
		plugins: [
			isProd && new MiniCssExtractPlugin(),
			isProd && new RenderPlugin(),
			...Object.keys(entryPoints).map(
				(e) =>
					!isProd &&
					new HtmlWebpackPlugin({
						chunks: [e],
						filename: `${e}.html`,
					})
			),
		].filter(Boolean),
		devServer: {
			magicHtml: false,
			open: true,
		},
	};
};
