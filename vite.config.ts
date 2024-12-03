import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), enhancedImages()],
	server: {
		fs: {
			allow: [path.resolve('./tailwind.config.ts')]
		}
	}
});
