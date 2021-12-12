import { Helmet } from 'react-helmet';
import Base from '../_base';

export default function Meta() {
	return (
		<Base>
			<Helmet>
				<title>About this Website | rgeorgebu</title>
			</Helmet>
			<h1>About this Website</h1>
			<p>
				So fun fact about me - I <em>love</em> ECMAScript (
				<abbr title="also known as">a.k.a</abbr> JavaScript) and I also
				love the <a href="https://reactjs.org">React</a>{' '}
				<em>library</em>.
			</p>
			<aside>
				Quick aside: I really do dislike when people (meaning internet
				people) describe React as a <strong>framework</strong>. React is
				a <strong>library</strong> meaning it has a singular concern
				(how to represent UI based on application state) but makes no{' '}
				<em>strong</em> recommendation to other aspects of ECMAScript
				web applications (e.g. fetching data, managing state, routing).
			</aside>
			<p>
				However, I do wish for my products to be performant both for
				users (UX) and developers (DX). In order to statisfy these
				constraints for my personal website (the site {"you're"}{' '}
				currently visiting) the primary concern was static HTML and CSS
				as the end result. Next level of concern was using React to
				generate the site (as I really appreciate the React model of
				representing components {"it's"} Lisp-like composition
				structure) so I can continue to use my favorite front-end
				library.
			</p>
			<p>
				Thus the site you see before you was composed of server-side
				rendered React components via Node and Webpack plugins and
				loaders. If you are interested in learning more please visit the{' '}
				<a href="https://github.com/rgeorgebu/rgeorgebu.github.io">
					source code repository
				</a>
			</p>
		</Base>
	);
}
