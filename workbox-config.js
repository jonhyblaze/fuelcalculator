module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,ico,html,json,md,css,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};