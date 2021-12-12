const vm = require('vm');
const ReactDOMServer = require('react-dom/server');
const webpack = require('webpack');

class RenderPlugin {
	apply(compiler) {
		compiler.hooks.make.tap('RenderPlugin', (compilation) => {
			compilation.hooks.processAssets.tap(
				{
					name: 'RenderPlugin',
					stage: webpack.Compilation.PROCESS_ASSETS_STAGE_DERIVED,
				},
				(assets) => {
					Object.entries(assets)
						.filter(([pathname]) => pathname.endsWith('.js'))
						.forEach(([pathname, source]) => {
							const c = { global: {}, exports: {}, require };
							vm.createContext(c);
							vm.runInNewContext(source.source(), c);
							const bodyContent =
								ReactDOMServer.renderToStaticMarkup(
									c.exports.default()
								);
							const helmet = c.exports.Helmet
								? c.exports.Helmet.renderStatic()
								: null;
							const html = `
						<!doctype html>
						<html ${helmet ? helmet.htmlAttributes.toString() : ''}>
							<head>
								${helmet ? helmet.title.toString() : ''}
								${helmet ? helmet.meta.toString() : ''}
								${helmet ? helmet.link.toString() : ''}
							</head>
							<body ${helmet ? helmet.bodyAttributes.toString() : ''}>
								<div>
									${bodyContent}
								</div>
							</body>
						</html>
					`.replace(/(\r|\n|\t)/g, '');
							compilation.emitAsset(
								pathname.replace(/\.js$/, '.html'),
								new webpack.sources.RawSource(html)
							);
							compilation.deleteAsset(pathname);
						});
				}
			);
		});
	}
}

module.exports = RenderPlugin;
