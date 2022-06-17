let mix = require('laravel-mix');

mix.js('src/home.js', 'dist');
mix.js('src/post.js', 'dist');
// mix.css('src/app.css', 'dist');

mix.browserSync({
	proxy: 'https://dmatthams.webflow.io',
	files: './js/',
	serveStatic: ['.'],
	rewriteRules: [
		{
			match: new RegExp('https://cdn.jsdelivr.net/gh/dmatthams/dmatthams-webflow/dist/home.js'),
			fn: function () {
				return '/dist/home.js';
			},
		},
		{
			match: new RegExp('https://cdn.jsdelivr.net/gh/dmatthams/dmatthams-webflow/dist/post.js'),
			fn: function () {
				return '/dist/post.js';
			},
		},
	],
});
