export declare namespace ButterData {
	export interface data {
		data: {
			meta: {
				count: number;
				previousPage?: number;
				nextPage?: number;
			};
			data: {
				url: string;
				created: string;
				published: string;
				author: {
					first_name: string;
					last_name: string;
					email: string;
					slug: string;
					bio: string;
					title: string;
					linkedin_url: string;
					facebook_url: string;
					instagram_url: string;
					twitter_handle: string;
					profile_image: string;
				};
				categories: {
					name: string;
					slug: string;
				}[];
				tags: {
					name: string;
					slug: string;
				};
			}[];
			features_image: string;
			slug: string;
			title: string;
			body: string;
			summary: string;
			headers: {
				'content-type': string;
			};
			config: {
				transformRequest: null[];
				transformResponse: null[];
				headers: {
					Accept: string;
					'X-Butter-Client': string;
				};
				timeout: number;
				xsrfCookieName: string;
				xsrfHeaderName: string;
				baseURL: string;
				method: string;
				params: {
					page: number;
					page_size: number;
					auth_token: string;
				};
				url: string;
			};
		};
	}
}
