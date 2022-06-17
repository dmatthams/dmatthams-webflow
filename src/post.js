import { createApp } from 'petite-vue';

const apiToken =
	'skkrDV4A0qbPVIkeVkOHRY97FeVBQ1QKAy0mDTAl1RkEUQDXzry9PdqvFvTFOKSEcepiO4DXu7AGmrqySnsMziM7uzJCWYLY8kvDI9BB8CU2vScb62EXcQlXfCEM24zAnotwrLOfhDq7pu8GA5q3KD9fcqRWBOOXPlfJ8kteRGNfkUTbwpMi';
const apiUrl = 'https://09rbw1iw.api.sanity.io/v2021-06-07/data/query/production';
const titleAppend = ' – David Matthams';

const getSlug = () => {
	var slug = null;
	if (process.env.NODE_ENV == 'production') {
		slug = window.location.href.split('/').pop();
	} else {
		const params = new Proxy(new URLSearchParams(window.location.search), {
			get: (searchParams, prop) => searchParams.get(prop),
		});
		slug = params.slug;
	}
	if (slug != null) {
		return slug;
	} else {
		window.location.replace('/404');
	}
};

createApp({
	// exposed to all expressions
	post: '',
	image: '',
	date: 'Date',
	// getters
	async getPost() {
		fetch(apiUrl + "?query=*[slug.current == '" + getSlug() + "']")
			.then((response) => response.json())
			.then((data) => {
				if (data['result'].length) {
					this.post = data['result'][0];
					this.setMeta();
					this.getImage(this.post.image);
					this.getDate(this.post.publishedAt);
				} else {
					window.location.replace('/404');
				}
			})
			.catch((error) => console.log(error));
	},
	setMeta() {
		$('title').text(this.post.title + titleAppend);
		$("meta[property='og:title']").attr('content', this.post.title + titleAppend);
		$("meta[property='twitter:title']").attr('content', this.post.title + titleAppend);
	},
	getImage(ref) {
		var image = ref['asset']['_ref'].split('-');
		const imageType = image[0];
		const imageId = image[1];
		const imageSize = image[2];
		const imageExt = image[3];
		this.image = 'https://cdn.sanity.io/images/09rbw1iw/production/' + imageId + '-' + imageSize + '.' + imageExt;
	},
	getDate(inputDate) {
		var date = new Date(inputDate);
		const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
		this.date = date.toLocaleDateString('en-us', options);
	},
}).mount('#app'); 
