'use strict';

const fs = require('fs');
const path = require('path');

function walkFiles(dir, pattern, ignorePattern) {
	const dirEntries = fs.readdirSync(dir);
	const files = dirEntries
		.filter((file) => file.match(pattern))
		.map((file) => ({
			path: `${dir}${path.sep}${file}`,
			name: file.replace('.js', ''),
		}));
	const subDirs = dirEntries.filter((file) => !file.match(/\..*$/));
	const subFiles = subDirs.flatMap((subDir) =>
		walkFiles(`${dir}${path.sep}${subDir}`, pattern, ignorePattern)
	);
	return files
		.concat(subFiles)
		.filter(({ path }) => !ignorePattern || !path.match(ignorePattern));
}

module.exports = walkFiles;
