// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
  				{ label: 'Home', link: '/' },

  				{ label: 'Infrastructure Projects', link: '/infrastructure/' },
  				{ label: 'Systems & Tools', link: '/systems/' },
  				{ label: 'Creative Pipeline', link: '/creative/' },
  				{ label: 'About', link: '/about/' },
			],
		}),
	],
});
