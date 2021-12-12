import { Helmet } from 'react-helmet';
import Base from '../_base';

export default function About() {
	return (
		<Base>
			<Helmet>
				<title>About | rgeorgebu</title>
			</Helmet>
			<h1>About</h1>
			<p>
				Unfortunately {"I'm"} a bit of a boring person, so you might be
				more interested in learning{' '}
				<a href="/about/meta.html">About this Website</a>
			</p>
			<h2>About Me</h2>
			<p>
				My name is George. I am a Software Engineer at{' '}
				{'$UNDISCLOSED_COMPANY'}. I <em>really really</em> like music.
			</p>
			<p>
				Ironically, I am bit of an anti-technologist; meaning I distrust
				technology being sold as a solution to human problems (e.g.
				crypto). I believe technology is a powerful, yet dangerous, and
				infantile tool.
			</p>
			<p>
				I do not wish for this site to pander nor peddle poor content -
				so my informal pledge is to only publish insightful and quality
				content ({"let's"} say in the same vein as{' '}
				<a href="https://www.youtube.com/channel/UC2C_jShtL725hvbm1arSV9w">
					CGP Grey
				</a>
				).
			</p>
			<p>
				As with anything online - all views expressed are solely my own
				and should not be linked to any other persona or organization
				that associates with me. We <em>can</em> separate the art from
				the artist.
			</p>
		</Base>
	);
}
