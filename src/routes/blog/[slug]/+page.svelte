<script>
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
</svelte:head>

<article>
	<header>
		<h1>{data.meta.title}</h1>
		<p class="meta">
			Published: {data.meta.date}
			{#if data.meta.readingTime}
				· {data.meta.readingTime}
			{/if}
		</p>
	</header>
	
	<div class="content">
		<svelte:component this={data.content} />
	</div>
	
	<footer>
		<a href="/">← Back to home</a>
	</footer>
</article>

<style>
	article {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}
	
	header {
		margin-bottom: 2rem;
	}
	
	h1 {
		margin-bottom: 0.5rem;
	}
	
	.meta {
		color: #666;
		font-size: 0.9rem;
	}
	
	.content :global(h2) {
		margin-top: 2rem;
		margin-bottom: 1rem;
	}
	
	.content :global(p) {
		line-height: 1.6;
		margin-bottom: 1rem;
	}
	
	.content :global(pre) {
		background: #f5f5f5;
		padding: 1rem;
		border-radius: 4px;
		overflow-x: auto;
	}
	
	.content :global(code) {
		background: #f5f5f5;
		padding: 0.2rem 0.4rem;
		border-radius: 3px;
		font-size: 0.9em;
	}
	
	.content :global(pre code) {
		background: none;
		padding: 0;
	}
	
	footer {
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 1px solid #eee;
	}
	
	footer a {
		color: #0066cc;
		text-decoration: none;
	}
</style>