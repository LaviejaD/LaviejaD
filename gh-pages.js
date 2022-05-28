var ghpages = require('gh-pages');

ghpages.publish('dist', {
	branch: 'gh-pages',
	message: 'gh-pages'
}, function (err) {

	if (err) {
		console.log(err);
	}
});