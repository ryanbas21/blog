import Reducer, {
	getPosts,
	submitPost,
	getPostsSuccess,
	loadingPosts
} from './posts.reducer';
test('Get Posts :: returns an action creator with getPosts type', () => {
	let expected = {
		type: 'GET_POSTS'
	};
	let actual = getPosts();
	expect(actual).toEqual(expected);
});
test('Submit Post :: should return action object with POST', () => {
	let expected = {
			type: 'SUBMIT_POST',
			payload: 'file.txt'
		},
		post = 'file.txt',
		actual = submitPost(post);
	expect(actual).toEqual(expected);
});
test('Get Posts Success :: Action should return object with payload', () => {
	let expected = {
		type: 'GET_POSTS_SUCCESS',
		payload: {
			title: 'Post'
		}
	};
	let actual = getPostsSuccess({
		title: 'Post'
	});
	expect(actual).toEqual(expected);
});
test('Get Posts Success :: Action should return object with payload', () => {
	let expected = {
		type: 'LOADING_POSTS'
	};
	let actual = loadingPosts();
	expect(actual).toEqual(expected);
});
test('PostsReducer :: GET_POSTS_SUCCESS', () => {
	let payload = [
		{
			url: 'example post',
			created: '2018-03-05T00:51:02.624545Z',
			published: '2018-03-05T00:51:02.624229Z',
			author: {
				first_name: 'Ryan',
				last_name: 'Bas',
				email: 'ryanbas21@gmail.com',
				slug: 'ryan-bas',
				bio: '',
				title: '',
				linkedin_url: '',
				facebook_url: '',
				instagram_url: '',
				pintrest_url: '',
				twitter_handle: '',
				profile_image: ''
			},
			categories: [
				{
					name: 'Example Category',
					slug: 'example-category'
				}
			],
			tags: [
				{
					name: 'Example tag',
					slug: 'example-tag'
				}
			],
			featured_image:
				'https://d2devwt40at1e2.cloudfront.net/api/file/tdt3s1OHRO6wfQOpmAHw',
			slug: 'example-post',
			title: 'Example Post',
			body: `<p>Welcome to ButterCMS! This an example blog post written using Butter.</p> <h3>What's happening here?</h3> <p>If you're viewing this post from your website or command line, you've successfully made a request to&nbsp;the <a href="https://buttercms.com/docs/api">Butter API</a>. If you haven't already, make sure you have our <a href="https://buttercms.com/docs/">development guides</a> pulled up for step-by-step instructions on setting up Butter.</p> <h3>How does&nbsp;editing work?</h3> <p>Butter's WYSIWYG editor supports standard text formatting including headings, links, quotes, code, text alignment, and more. You can upload, crop, and resize images which are automatically hosted and delivered through a CDN (see below). You can also edit HTML directly when needed.</p> <figure class="image"><img src="https://d2wzhk7xhrnk1x.cloudfront.net/rgPM9aHoSSKnjk44TQlD_butter-blog-post.jpg" alt="Delivered to you via CDN" /> <figcaption>Delivered to you via CDN</figcaption> </figure> <h3>Can I use Butter as a full CMS for&nbsp;things other than a&nbsp;blog?</h3> <p>Yes. Butter can be used as a full CMS for managing dynamic content and creating pages across your entire website or app. Check out our <a href="https://buttercms.com/docs/">development guides</a> for step-by-step tutorials on setting this up.</p>`,
			summary: 'This is an example blog post. Pretter neat huh?',
			seo_title: 'Example Post SEO OPtimized Title',
			meta_description:
				'This is our example blog posts SEO optimized meta description.',
			status: 'published'
		}
	];
	const action = getPostsSuccess(payload);
	const expected = { posts: payload };
	const actual = Reducer(undefined, action);
	expect(actual).toEqual(expected);
});
