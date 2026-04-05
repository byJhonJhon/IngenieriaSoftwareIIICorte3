import adapter from '@sveltejs/adapter-static';

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const base = isGitHubActions ? '/IngenieriaSoftwareIIICorte3' : '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base
		}
	}
};

export default config;
