import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'raccoonBot',
			customCss: [
				'./src/styles/custom.css',
			],
			social: {
				github: 'https://github.com/MiguelHigueraDev/raccoonbot-ts',
			},
			sidebar: [
				{
					label: 'Introduction',
					items: [
						{ label: 'Welcome', link: '/introduction/welcome/' },
						{ label: 'FAQ', link: '/introduction/faq/' },
					]
				},
				{
					label: 'Commands',
					autogenerate: { directory: 'commands'},
				},
			],
		}),
	],
});
