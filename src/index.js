import Base from './_base';

export default function Index() {
	return (
		<Base>
			<h1>Hello world!</h1>
			<p>This is my home page.</p>
			<p>This is another paragraph.</p>
			<p>
				<a href="/projects">Projects</a>
				<a href="/music-reviews">Music Reviews</a>
				<a href="/about.html">About</a>
			</p>
		</Base>
	);
}
