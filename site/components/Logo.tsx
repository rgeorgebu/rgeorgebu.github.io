const HEIGHT_RATIO = 1;
const WIDTH_RATIO = 1.5;
const MULTIPLIER = 4;

export function Logo() {
	const height = `${HEIGHT_RATIO * MULTIPLIER}rem`;
	const width = `${WIDTH_RATIO * MULTIPLIER}rem`;

	return (
		<a href='/' style={{ alignSelf: 'flex-start', lineHeight: 0 }}>
			<img
				src='/assets/personal-logo.svg'
				alt='Abstract butterfly (my personal logo)'
				style={{ height, width }}
			/>
		</a>
	);
}
