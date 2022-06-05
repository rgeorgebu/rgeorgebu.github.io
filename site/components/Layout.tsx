import { Helmet } from 'react-helmet';
import { Logo } from './Logo.tsx';
import { Header } from './Header.tsx';
import { Footer } from './Footer.tsx';
import { Main } from './Main.tsx';

export interface LayoutProps {
	children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
	return (
		<>
			<Helmet htmlAttributes={{ lang: 'en' }}>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<title>rgeorgebu.net</title>
				<link href='https://unpkg.com/normalize.css@8.0.1/normalize.css' />
				<link rel='favicon' href='/assets/personal-logo.svg' />
				<style>
					{`
					body {
						font-family: sans-serif;
						color: #333;
						background-color: #003153;
						display: flex;
						gap: 1rem;
						flex-direction: column;
						margin: 0 auto;
						line-height: 1.5;
						max-width: 80ch;
						padding: 1rem;
					}

					h1, h2, h3, h4, h5, h6 {
						margin-block-start: 0;
						margin-block-end: 0.25em;
					}

					h2:not(:first-child),
					h3:not(:first-child),
					h4:not(:first-child),
					h5:not(:first-child),
					h6:not(:first-child) {
						margin-block-start: 1em;
					}

					p {
						margin-block-start: 0;
						margin-block-end: 0;
					}

					p + p {
						margin-block-start: 1em;
					}
				`}
				</style>
			</Helmet>
			<Logo />
			<Header />
			<Main>
				{children}
			</Main>
			<Footer />
		</>
	);
}
