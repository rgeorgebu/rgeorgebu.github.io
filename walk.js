const fs = require('fs');
const path = require('path');

module.exports = function walk(dir) {
	const entries = fs.readdirSync(dir);
	const directories = entries.filter((f) =>
		fs.lstatSync(`${dir}${path.sep}${f}`).isDirectory()
	);
	const subFiles = directories.flatMap((d) => walk(`${dir}${path.sep}${d}`));
	const files = entries.filter((f) =>
		fs.lstatSync(`${dir}${path.sep}${f}`).isFile()
	);
	return files.map((f) => `${dir}${path.sep}${f}`).concat(subFiles);
};
