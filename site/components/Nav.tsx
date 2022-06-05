export function Nav() {
	return (
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
	);
}
