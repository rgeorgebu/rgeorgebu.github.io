import { dirname, resolve } from 'path';
import { copySync, emptyDirSync, ensureDirSync } from 'fs';
import { renderToHtml5String } from './render.tsx';

export interface Site {
	siteMap: {
		[fileName: string]: () => JSX.Element;
	};
	assetsPath: string;
	cnameFilename: string;
}

export function write(
	inDir: string,
	outDir: string,
	{ siteMap, assetsPath, cnameFilename }: Site,
) {
	const fileAndComponent = Object.entries(siteMap);

	emptyDirSync(resolve(outDir));
	copySync(resolve(inDir, cnameFilename), resolve(outDir, 'CNAME'));
	copySync(resolve(inDir, assetsPath), resolve(outDir, assetsPath));
	for (const [fileName, component] of fileAndComponent) {
		ensureDirSync(dirname(resolve(outDir, fileName)));
		const fileContents = renderToHtml5String(component);
		Deno.writeTextFileSync(resolve(outDir, fileName), fileContents);
	}
}
