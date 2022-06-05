import { Licensing } from './Licensing.tsx';
import { Copyright } from './Copyright.tsx';

export function Footer() {
	return (
		<footer
			style={{
				padding: '1rem',
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: '#DDD',
			}}
		>
			<Copyright />
			<Licensing />
		</footer>
	);
}
