var ghpages = require('gh-pages');

ghpages.publish('dist', {
	branch: 'gh-pages',
	message: `gh-pages ${new Date().toISOString()}`
}, function (err) {

	if (err) {
		console.log(err);
	}
});