export interface HtmlProps {
	children?: string;
	htmlAttributes: React.HTMLAttributes<HTMLHtmlElement>;
	title: React.ReactElement;
	meta: React.ReactElement;
	link: React.ReactElement;
	style: React.ReactElement;
	bodyAttributes: React.HTMLAttributes<HTMLBodyElement>;
}

export function Html(
	{ children, htmlAttributes, title, meta, link, style, bodyAttributes }:
		HtmlProps,
) {
	return (
		<html {...htmlAttributes}>
			<head>
				{meta}
				{title}
				{link}
				{style}
			</head>
			<body
				{...bodyAttributes}
				dangerouslySetInnerHTML={{ __html: children || '' }}
			/>
		</html>
	);
}
