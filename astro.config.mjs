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
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Testa',
					autogenerate: { directory: 'testa'}
				}
			],
		}),
	],
});
