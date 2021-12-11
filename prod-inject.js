function prodInject(_, loaderContext, content) {
	let code = content;
	if (
		!loaderContext.resource.match('.*/src/.*_.*') &&
		content.includes("import { Helmet } from 'react-helmet';")
	) {
		code = `
			${content}

			export { Helmet };
		`;
	}
	return { code, cacheable: true };
}

module.exports = prodInject;
