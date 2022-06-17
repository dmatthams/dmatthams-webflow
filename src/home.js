import { createApp } from 'petite-vue';

const apiToken =
	'skkrDV4A0qbPVIkeVkOHRY97FeVBQ1QKAy0mDTAl1RkEUQDXzry9PdqvFvTFOKSEcepiO4DXu7AGmrqySnsMziM7uzJCWYLY8kvDI9BB8CU2vScb62EXcQlXfCEM24zAnotwrLOfhDq7pu8GA5q3KD9fcqRWBOOXPlfJ8kteRGNfkUTbwpMi';
const apiUrl = 'https://09rbw1iw.api.sanity.io/v2021-06-07/data/query/production';

createApp({
	// exposed to all expressions
	posts: '',
	// getters
	async getPosts() {
		const request = await fetch(apiUrl + '?query=*[(_type in ["post"])]');
		this.posts = await request.json();

		// console.log(this.posts.result);
	},
	getThumbnail(ref) {
		var image = ref['asset']['_ref'];
		image = image.split('-');
		const imageType = image[0];
		const imageId = image[1];
		const imageSize = image[2];
		const imageExt = image[3];
		return 'https://cdn.sanity.io/images/09rbw1iw/production/' + imageId + '-' + imageSize + '.' + imageExt + '?h=80&w=80';
	},
	getUrl(slug) {
		console.log(slug);
		return (process.env.NODE_ENV == 'production' ? '/post/' + slug : '/post/?slug=' + slug )
	}
}).mount('.posts');
