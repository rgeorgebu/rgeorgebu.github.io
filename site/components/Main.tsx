import { Helmet } from 'react-helmet';

export interface MainProps {
	children: React.ReactNode;
}

export function Main({ children }: MainProps) {
	return (
		<>
			<Helmet>
				<style>
					{`
                    main {
                        background-color: #ddd;
                        padding: 1rem;
                    }
                `}
				</style>
			</Helmet>
			<main>{children}</main>
		</>
	);
}
