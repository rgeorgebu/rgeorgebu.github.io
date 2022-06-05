import { renderToStaticMarkup } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { Html } from './Html.tsx';

export function renderToHtml5String(Component: () => JSX.Element) {
	const bodyContents = renderToStaticMarkup(<Component />);
	const {
		htmlAttributes,
		title,
		meta,
		link,
		bodyAttributes,
		style,
	} = Helmet.renderStatic();
	const htmlContents = renderToStaticMarkup(
		<Html
			htmlAttributes={htmlAttributes.toComponent()}
			title={title.toComponent()}
			meta={meta.toComponent()}
			link={link.toComponent()}
			style={style.toComponent()}
			bodyAttributes={bodyAttributes.toComponent()}
		>
			{bodyContents}
		</Html>,
	);
	return '<!DOCTYPE html>' + htmlContents;
}
