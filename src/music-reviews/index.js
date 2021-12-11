import { Helmet } from 'react-helmet';
import styles from './index.css';
import Base from '../_base';

export default function Index() {
	return (
		<Base>
			<Helmet>
				<title>Music Reviews</title>
			</Helmet>
			<div className={styles.myClass}>This is a music review</div>
		</Base>
	);
}
