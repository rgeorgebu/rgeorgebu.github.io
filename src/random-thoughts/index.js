import { Helmet } from 'react-helmet';
import BaseView from '../_components/base-view';
import ThoughtOne from './_thoughts/thought-one';

export default function Index() {
	return (
		<BaseView>
			<Helmet>
				<title>Random Thoughts</title>
			</Helmet>
			<h1>Random Thoughts</h1>
			<ThoughtOne />
		</BaseView>
	);
}
export { Helmet };
