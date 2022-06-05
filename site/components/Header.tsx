import { Nav } from './Nav.tsx';

export function Header() {
	return (
		<header>
			<nav
				style={{
					padding: '1rem',
					display: 'flex',
					gap: '1rem',
					backgroundColor: '#DDD',
				}}
			>
				<a href='/index.html'>Index</a>
				<a href='/about/index.html'>About</a>
			</nav>
		</header>
	);
}
