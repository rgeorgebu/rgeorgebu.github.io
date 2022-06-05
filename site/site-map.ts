import { Index } from './pages/index.tsx';
import { Index as AboutIndex } from './pages/about/index.tsx';
import { ThisSite } from './pages/about/this-site.tsx';

export const siteMap = {
	'index.html': Index,
	'about/index.html': AboutIndex,
	'about/this-site.html': ThisSite,
};

export const assetsPath = 'assets';

export const cnameFilename = 'CNAME';
