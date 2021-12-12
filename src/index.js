import { Helmet } from 'react-helmet';
import Base from './_base';

export default function Index() {
	return (
		<Base>
			<Helmet>
				<title>Home | rgeorgebu</title>
			</Helmet>
			<h1>Yo!</h1>
			<p>{"How's it going there?"}</p>
			<p>Welcome to my website (you can call me George).</p>
			<p>
				As you can tell, this site is currently a{' '}
				<abbr title="Work in Progress">WIP</abbr> so feel free to check
				back ocassionally for new content!
			</p>
		</Base>
	);
}
