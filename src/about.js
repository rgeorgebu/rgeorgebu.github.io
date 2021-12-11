import Base from './_base';
import { Helmet } from 'react-helmet';

export default function About() {
	return (
		<Base>
			<Helmet>
				<title>About</title>
			</Helmet>
			<a href="/">Home</a>
		</Base>
	);
}
