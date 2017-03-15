'use strict';

const lexicon = require('lexicon-ux');
const path = require('path');

module.exports = {
	metalComponents: ['electric-quartz-components'],
	sassOptions: {
		includePaths: ['node_modules', lexicon.includePaths]
	},
	vendorSrc: [
		path.join(lexicon.buildDir, 'images', 'icons', '*'),
		path.join(lexicon.srcDir, 'js', 'svg4everybody.js'),
		'node_modules/source-sans-pro/**'
	]
};
