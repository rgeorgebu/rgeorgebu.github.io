import { Helmet } from 'react-helmet';

const HEIGHT_RATIO = 1;
const WIDTH_RATIO = 1.5;
const MULTIPLIER = 4;

export function Logo() {
	return (
		<>
			<Helmet>
				<style>
					{`
					.logo {
						align-self: flex-start;
						line-height: 0;
					}

					.logo img {
						height: ${HEIGHT_RATIO * MULTIPLIER}rem;
						width: ${WIDTH_RATIO * MULTIPLIER}rem;
					}
				`}
				</style>
			</Helmet>
			<a href='/' className='logo'>
				<img
					src='/assets/personal-logo.svg'
					alt='Abstract butterfly (my personal logo)'
				/>
			</a>
		</>
	);
}
