import CopyRightNotice from './copy-right-notice/copy-right-notice';
import SourceCodeLicenseNotice from './source-code-license-notice';
import styles from './notices.css';

export default function Notices() {
	return (
		<div className={styles.notices}>
			<CopyRightNotice />
			<SourceCodeLicenseNotice />
		</div>
	);
}
