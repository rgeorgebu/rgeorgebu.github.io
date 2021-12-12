import styles from './copy-right-notice.css';

export default function CopyRightNotice() {
	return (
		<p className={styles.copyrightNotice}>
			<span className={styles.iconographyLine}>
				<small>© 2021</small>
				<a
					rel="license"
					href="http://creativecommons.org/licenses/by/4.0/"
				>
					<img
						alt="Creative Commons License"
						src="https://i.creativecommons.org/l/by/4.0/80x15.png"
					/>
				</a>
			</span>
			<small>
				This work is licensed under a{' '}
				<a
					rel="license"
					href="http://creativecommons.org/licenses/by/4.0/"
				>
					Creative Commons Attribution 4.0 International License
				</a>
				.
			</small>
		</p>
	);
}
