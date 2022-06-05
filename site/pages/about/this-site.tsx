import { Layout } from '../../components/Layout.tsx';
import { Helmet } from 'react-helmet';

export function ThisSite() {
	return (
		<Layout>
			<Helmet>
				<title>This Site | rgeorgebu</title>
			</Helmet>
			<h1>About this Site</h1>
			<h2>Underlying Technologies</h2>
			<p>
				Fun fact about me - I <em>love</em> ECMAScript and I also love the{' '}
				<a href='https://reactjs.org'>React</a> library.
			</p>
			<p>So, in building this site I had two primary design contraints:</p>
			<ol>
				<li>
					The site must be truly and fully static (i.e. HTML and CSS only)
				</li>
				<li>The site must be built with React</li>
			</ol>
			<p>
				Design contraint 1 aims for maximal{' '}
				<abbr title='User experience'>UX</abbr>{' '}
				(speed, accessibility, ease-of-use, etc.), while design contraint 2 aims
				for the best <abbr title='Developer experience'>DX</abbr>.
			</p>
			<p>
				So many "Set up a personal blog with React" sites online only go so far
				as to ship the React and React DOM libraries to the client along with
				the blog assets. While this might be fine for business application or
				more complex web apps/web sites - this is not okay for a static blog.
			</p>
			<p>
				Thus, by utilizing the <code>renderToStaticMarkup</code>{' '}
				method and a bit of boostrapping to import components and map their
				names to an HTML file name - we can "render" pages server side just
				once. From there, we can upload the HTML (and other assets) to GitHub
				pages for minimal cost hosting.
			</p>
			<p>
				In an original incarnation of the project - I originally used Webpack
				with a custom set of plugins and loaders to transpile and render the
				code in the build pipeline, however it felt too complex and after being
				away from the code for a bit I didn't really feel like it was the best
				solution. So, I went back to the drawing board and setup a simpler
				Webpack transpilation pipeline the would create a NodeJS render script.
			</p>
			<p>
				However, while I felt better about the render script (vs. render
				pipeline) - integrating Node with newer and DX-friendly tools (e.g. JSX,
				TypeScript) is kind of a pain. I then decided to port what I had in Node
				to Deno since TypeScript (and thus JSX) support is built-in first class.
			</p>
			<p>
				The fruits of that labor are what you see now! I hope you enjoy 😁
			</p>
			<h3>Source Code</h3>
			<a href='https://github.com/rgeorgebu/rgeorgebu.github.io'>
				GitHub (main source)
			</a>
			<h2>Notes on the Design</h2>
			<ul>
				<li>
					The background is a shade of{' '}
					<a href='https://youtu.be/BtnCynfmBnc'>Prussian Blue</a>
				</li>
				<li>
					The max width is{' '}
					<a href='https://en.wikipedia.org/wiki/Characters_per_line'>
						80 characters
					</a>
				</li>
			</ul>
		</Layout>
	);
}
