import { json } from '@sveltejs/kit';

export const prerender = true;

async function getPosts() {
	let posts = [];
	
	const paths = import.meta.glob('/src/posts/*.md', { eager: true });
	
	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').pop().split('.').shift();
		
		if (file && typeof file === 'object' && 'metadata' in file) {
			const metadata = file.metadata;
			const post = { ...metadata, slug };
			posts.push(post);
		}
	}
	
	posts = posts.sort((a, b) => 
		new Date(b.date).getTime() - new Date(a.date).getTime()
	);
	
	return posts;
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}