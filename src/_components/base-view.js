import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import './base-view.css';
import Nav from './nav';

export default function BaseView({ children }) {
	return (
		<>
			<Helmet htmlAttributes={{ lang: 'en-US' }}>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<title>rgeorgebu.github.io</title>
				<link rel="stylesheet" href="/styles.css" />
			</Helmet>
			<Nav />
			<main>{children}</main>
		</>
	);
}

BaseView.propTypes = {
	children: PropTypes.node,
};
