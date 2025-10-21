<script>
	import { base } from '$app/paths';
</script>

<nav>
	<div class="nav-container">
		<a href="{base}/" class="logo">My Blog</a>
		<div class="nav-links">
			<a href="{base}/">Home</a>
			<a href="{base}/about">About</a>
		</div>
	</div>
</nav>

<slot />

<footer>
	<div class="footer-container">
		<p>&copy; 2024 My SvelteKit Blog. Built with SvelteKit.</p>
	</div>
</footer>

<style>
	:global(body) {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
	}

	nav {
		background: #fff;
		border-bottom: 1px solid #eee;
		position: sticky;
		top: 0;
		z-index: 100;
	}
	
	.nav-container {
		max-width: 800px;
		margin: 0 auto;
		padding: 1rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.logo {
		font-weight: bold;
		font-size: 1.2rem;
		color: #333;
		text-decoration: none;
	}
	
	.nav-links {
		display: flex;
		gap: 1.5rem;
	}
	
	.nav-links a {
		text-decoration: none;
		color: #666;
		transition: color 0.2s;
	}
	
	.nav-links a:hover {
		color: #0066cc;
	}
	
	footer {
		margin-top: 4rem;
		padding: 2rem;
		background: #f8f8f8;
		border-top: 1px solid #eee;
	}
	
	.footer-container {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
		color: #666;
		font-size: 0.9rem;
	}
</style>
