import { Helmet } from 'react-helmet';
import { Logo } from './Logo.tsx';
import { Header } from './Header.tsx';
import { Footer } from './Footer.tsx';

export interface LayoutProps {
	children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
	return (
		<>
			<Helmet
				htmlAttributes={{
					lang: 'en',
				}}
				bodyAttributes={{
					style: {
						fontFamily: 'sans-serif',
						color: '#333',
						backgroundColor: '#003153',
						display: 'flex',
						gap: '1rem',
						flexDirection: 'column',
						margin: '0 auto',
						lineHeight: '1.5',
						maxWidth: '80ch',
						padding: '1rem',
					},
					// deno-lint-ignore no-explicit-any
				} as any}
			>
				<meta charSet='utf-8' />
				<title>rgeorgebu.net</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link href='https://unpkg.com/normalize.css@8.0.1/normalize.css' />
				<link rel='favicon' href='/assets/personal-logo.svg' />
			</Helmet>
			<Logo />
			<Header />
			<main
				style={{
					backgroundColor: '#DDD',
					padding: '1rem',
				}}
			>
				{children}
			</main>
			<Footer />
		</>
	);
}
