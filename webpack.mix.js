let mix = require('laravel-mix');

// mix.js('src/home.js', 'dist');
// mix.js('src/post.js', 'dist');
// mix.css('src/app.css', 'dist');

mix.browserSync({
	proxy: 'https://dmatthams.webflow.io',
	files: './js/',
	serveStatic: ['.'],
	rewriteRules: [
		{
			match: new RegExp('https://cdn.jsdelivr.net/gh/dmatthams/dmatthams-webflow/js/home.js'),
			fn: function () {
				return '/js/home.js';
			},
		},
		{
			match: new RegExp('https://cdn.jsdelivr.net/gh/dmatthams/dmatthams-webflow/js/post.js'),
			fn: function () {
				return '/js/post.js';
			},
		},
	],
});
