import { Layout } from '../components/Layout.tsx';
import { Helmet } from 'react-helmet';

export function Index() {
	return (
		<Layout>
			<Helmet>
				<title>Index | rgeorgebu</title>
			</Helmet>
			<h1>Yo!</h1>
			<p>How's it going there?</p>
			<p>Welcome to my website (you can call me George)</p>
			<p>
				Stick around for a bit or pass on by - I hope your day is going well!
			</p>
		</Layout>
	);
}
