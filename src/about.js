import BaseView from './_components/base-view';
import { Helmet } from 'react-helmet';

export default function About() {
	return (
		<BaseView>
			<Helmet>
				<title>About</title>
			</Helmet>
			<h1>About</h1>
			<section>This is who I am.</section>
		</BaseView>
	);
}
export { Helmet };
