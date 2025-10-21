<svelte:head>
	<title>About - My Blog</title>
</svelte:head>

<main>
	<h1>About Me</h1>
	
	<section>
		<p>
			Welcome! I'm a developer passionate about web technologies and sharing knowledge 
			through writing.
		</p>
		
		<h2>What I Write About</h2>
		<ul>
			<li>Web Development</li>
			<li>SvelteKit & Svelte</li>
			<li>JavaScript & TypeScript</li>
			<li>Best Practices</li>
		</ul>
		
		<h2>About This Blog</h2>
		<p>
			This blog is built with SvelteKit and deployed on GitHub Pages. It uses markdown 
			for content and static site generation for blazing fast performance.
		</p>
		
		<h2>Get in Touch</h2>
		<p>
			Feel free to reach out via <a href="https://github.com/yoloinfinity55" target="_blank">GitHub</a>.
		</p>
	</section>
</main>

<style>
	main {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}
	
	h1 {
		margin-bottom: 2rem;
	}
	
	section {
		line-height: 1.6;
	}
	
	h2 {
		margin-top: 2rem;
		margin-bottom: 1rem;
		color: #333;
	}
	
	ul {
		margin-left: 1.5rem;
	}
	
	li {
		margin-bottom: 0.5rem;
	}
	
	a {
		color: #0066cc;
		text-decoration: none;
	}
	
	a:hover {
		text-decoration: underline;
	}
</style>
