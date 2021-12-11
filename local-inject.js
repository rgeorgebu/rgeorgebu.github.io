function getComponentName(content) {
	return content.match(/export default function (.*)\(/)[1];
}

function localInject(_, loaderContext, content) {
	let code = content;
	if (!loaderContext.resource.match('.*/src/.*_.*')) {
		const componentName = getComponentName(content);
		code = `
			import ReactDOM from 'react-dom';

			${content}

			const el = document.createElement('div');
			document.body.appendChild(el);
			ReactDOM.render(<${componentName} />, el);
		`;
	}
	return { code, cacheable: true };
}

module.exports = localInject;
