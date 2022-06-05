import { Helmet } from 'react-helmet';

export function Nav() {
	return (
		<>
			<Helmet>
				<style>{`
					nav {
						padding: 1rem;
						display: flex;
						gap: 1rem;
						background-color: #ddd;
					}
				`}</style>
			</Helmet>
			<nav>
				<a href='/index.html'>Index</a>
				<a href='/about/index.html'>About</a>
			</nav>
		</>
	);
}
