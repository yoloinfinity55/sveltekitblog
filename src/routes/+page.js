import { base } from '$app/paths';

export async function load({ fetch }) {
	const response = await fetch(`${base}/api/posts`);
	const posts = await response.json();
	
	return {
		posts
	};
}
