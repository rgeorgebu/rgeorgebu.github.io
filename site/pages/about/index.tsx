import { Layout } from '../../components/Layout.tsx';
import { Helmet } from 'react-helmet';

export function Index() {
	return (
		<Layout>
			<Helmet>
				<title>About | rgeorgebu</title>
				<style>{`
					.side-by-side {
						display: flex;
						gap: 1rem;
					}

					.side-by-side img {
						min-width: 33%;
						object-fit: cover;
					}
				`}</style>
			</Helmet>
			<h1>About</h1>
			<h2>Me</h2>
			<div className="side-by-side">
				<div>
					<p>
						My name is George. I am a Software Engineer working at
						$UNDISCLOSED_COMPANY. I graduated from Milwaukee School of
						Engineering with a degree in Software Engineering.
					</p>
					<p>
						My interests include music (typically of the classical variety),
						technology, and cribbage.
					</p>
					<p>
						Ironically, I am a bit of an anti-technologist; I am not a
						particular ally to the Silicon-valley type mentality. However, there
						is great and terrible power in technology and I hope to wield it to
						benefit human life rather than complicate it. I'm probably a
						50%-sardonic and 50%-serious anarcho-primitivist, but I will say -
						{' '}
						<abbr title='Air Conditioning'>AC</abbr>{' '}
						is probably one of the best human inventions 🙃
					</p>
				</div>
				<img
					src='/assets/me.jpg'
					alt='A picture of me'
				/>
			</div>
			<h3>Personal Views Disclaimer</h3>
			<p>
				As with anything online - all views expressed are solely my own and
				should not be linked to any other persona or organization that
				associates with me. We <em>can</em> separate the art from the artist.
			</p>
			<h2>This Site</h2>
			<p>
				You may notice that this site does <em>not</em>{' '}
				require JavaScript to render, but would it surprise you that it's built
				with <a href='https://reactjs.org'>React</a>?
			</p>
			<a href='/about/this-site.html'>Learn more about this site was built.</a>
		</Layout>
	);
}
