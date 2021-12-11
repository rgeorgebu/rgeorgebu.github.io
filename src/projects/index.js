import { Helmet } from 'react-helmet';
import Base from '../_base';

export default function Index() {
	return (
		<Base>
			<Helmet>
				<title>Projects</title>
			</Helmet>
			<h1>Projects</h1>
			<p>This is my projects page.</p>
			<p>This is another paragraph.</p>
		</Base>
	);
}
