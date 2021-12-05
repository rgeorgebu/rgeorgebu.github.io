'use strict';

const pathLib = require('path');
const walkFiles = require('./walk-files');
const RenderPlugin = require('./render-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const entries = walkFiles('src', /.*\.js$/, /.*_.*/).reduce(
	(agg, { path, name }) => ({
		...agg,
		[`${name}-${Math.random().toString().substring(2)}`]: {
			import: pathLib.resolve(path),
			filename: path.replace('src/', ''),
		},
	}),
	{}
);

module.exports = () => ({
	devtool: false,
	entry: entries,
	output: {
		clean: true,
		library: {
			type: 'commonjs',
		},
	},
	target: 'node',
	module: {
		rules: [
			{
				test: /\.js?$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{
									targets: { node: 'current' },
								},
							],
							['@babel/preset-react', { runtime: 'automatic' }],
						],
					},
				},
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
				],
			},
		],
	},
	plugins: [new RenderPlugin(), new MiniCssExtractPlugin({ runtime: false })],
	optimization: {
		splitChunks: {
			cacheGroups: {
				styles: {
					name: 'styles',
					type: 'css/mini-extract',
					chunks: 'all',
					enforce: true,
				},
			},
		},
	},
});
