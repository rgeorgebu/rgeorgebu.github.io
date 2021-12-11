import { Helmet } from 'react-helmet';

export default function Index() {
	return (
		<>
			<Helmet>
				<title>New Title :) Again</title>
			</Helmet>
			<h1>Hello world!</h1>
			<p>This is my home page.</p>
			<p>This is another paragraph.</p>
			<p>
				<a href="projects">Projects</a>
				<a href="music-reviews">Music Reviews</a>
			</p>
		</>
	);
}
