import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Notices from './_components/notices/notices';
import Nav from './_components/nav';
import './_base.css';

export default function Base({ children }) {
	return (
		<>
			<Helmet bodyAttributes={{ lang: 'en' }}>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link href="/styles.css" rel="stylesheet" />
				<link
					href="data:image/png,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAIAAAAiOjnJAAAABGdBTUEAALGPC/xhBQAAAiJJREFUeF7t0IEAAAAAw6D5Ux/khVBhwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDBgwIABAwYMGDDwMDDVlwABBWcSrQAAAABJRU5ErkJggg=="
					rel="icon"
				/>
				<title>rgeorgebu.github.io</title>
			</Helmet>
			<header>
				<Nav />
			</header>
			<main>{children}</main>
			<footer>
				<Notices />
			</footer>
		</>
	);
}

Base.propTypes = {
	children: PropTypes.node,
};
