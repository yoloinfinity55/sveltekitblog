<script>
	import { base } from '$app/paths';
	export let data;
</script>

<svelte:head>
	<title>My SvelteKit Blog</title>
</svelte:head>

<main>
	<h1>Welcome to My Blog</h1>
	<p>A simple markdown-powered blog built with SvelteKit</p>
	
	<section class="posts">
		<h2>Recent Posts</h2>
		{#each data.posts as post}
			<article>
				<h3>
					<a href="{base}/blog/{post.slug}">{post.title}</a>
				</h3>
				<p class="meta">{post.date}</p>
				<p>{post.excerpt}</p>
			</article>
		{/each}
	</section>
</main>

<style>
	main {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}
	
	.posts {
		margin-top: 3rem;
	}
	
	article {
		margin-bottom: 2rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid #eee;
	}
	
	h3 a {
		color: #333;
		text-decoration: none;
	}
	
	h3 a:hover {
		color: #0066cc;
	}
	
	.meta {
		color: #666;
		font-size: 0.9rem;
	}
</style>
