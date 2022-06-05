import { Licensing } from './Licensing.tsx';
import { Copyright } from './Copyright.tsx';
import { Helmet } from 'react-helmet';

export function Footer() {
	return (
		<>
		<Helmet>
			<style>{`
				footer {
					padding: 1rem;
					display: flex;
					flex-direction: column;
					background-color: #ddd;
				}
			`}</style>
		</Helmet>
		<footer>
			<Copyright />
			<Licensing />
		</footer>
		</>
	);
}
