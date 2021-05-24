module.exports = {
	branches: [ 'master' ],
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/github',
		'@semantic-release/release-notes-generator',
		'@semantic-release/npm',
		[ '@semantic-release/git', {
			'assets': [ 'package.json' ],
			'message': 'chore(release): [skip ci] bump version to ${nextRelease.version}'
		} ]
	]
};
