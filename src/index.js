import BaseView from './_components/base-view';
import { Helmet } from 'react-helmet';

export default function Index() {
	return (
		<BaseView>
			<h1>Hello world!</h1>
			<section>This is my home page.</section>
		</BaseView>
	);
}
export { Helmet };
