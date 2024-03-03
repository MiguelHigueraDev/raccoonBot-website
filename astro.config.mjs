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
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en'
				},
				es: {
					label: 'Español'
				}
			},
			sidebar: [
				{
					label: 'Introduction',
					translations: {
						es: 'Introducción',
					},
					items: [
						{ label: 'Welcome', translations: { es: 'Bienvenid@' }, link: '/introduction/welcome/' },
						{ label: 'FAQ', translations: {es: 'Preguntas frecuentes'}, link: '/introduction/faq/' },
					]
				},
				{
					label: 'Commands',
					translations: {
						es: 'Comandos',
					},
					items: [
						{
							label: 'Overview', translations: { es: 'Resumen'}, link : '/commands/'
						},
						{
							label: 'Administration',
							translations: { es: 'Administración' },
							items: [
								{ label: '/modules', link: '/commands/administration/modules/' },
								{ label: '/setting', link: '/commands/administration/setting/' },
								{ label: '/settings', link: '/commands/administration/settings/' },
								{ label: 'Individual Settings', translations: { es: 'Configuración Individual'}, items: [
									{ label: '/setting mainchannel', link: '/commands/administration/individual-settings/mainchannel/' },
								]}
							]
						},
						{
							label: 'Games',
							translations: { es : 'Juegos'},
							items: [
								{ label: '/trivia', link: '/commands/games/trivia/' },
								{ label: '/hangman', link: '/commands/games/hangman/' },
							]
						},
						{
							label: 'Media',
							translations: { es : 'Medios'},
							items: [
								{ label: '/movie', link: '/commands/media/movie/' },
								{ label: '/tvshow', link: '/commands/media/tvshow/' },
							]
						},
						{
							label: 'Overwatch',
							items: [
								{ label: '/owhero', link: '/commands/overwatch/owhero/' },
								{ label: '/owroles', link: '/commands/overwatch/owroles/' },
							]
						},
						{
							label: 'Personal',
							items: [
								{ label: '/birthday', link: '/commands/personal/birthday/' },
								{ label: '/preferences', link: '/commands/personal/preferences/' },
							]
						},
						{
							label: 'Random',
							translations: { es: 'Aleatorio'},
							items: [
								{ label: '/randitem', link: '/commands/random/randitem/' },
								{ label: '/randteams', link: '/commands/random/randteams/' },
								{ label: '/shuffle', link: '/commands/random/shuffle/' },
							]
						},
						{
							label: 'Utility',
							translations: { es: 'Utilidades'},
							items: [
								{ label: '/cel', link: '/commands/utility/cel/' },
								{ label: '/fah', link: '/commands/utility/fah/' },
								{ label: '/ping', link: '/commands/utility/ping/' },
								{ label: '/poll', link: '/commands/utility/poll/' },
							]
						}
					],
				},
				{
					label: 'Changelog',
					translations: {
						es: 'Registro de cambios',
					},
					items: [
						{ label: '0.6.0', link: '/changelog/060/' },
						{ label: '0.5.0', link: '/changelog/050/' },
					]
				}
			],
		}),
	],
});
