// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Alec Estrada',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/UnchainedAtom' },
      ],
      sidebar: [
        { label: 'Home', link: '/' },
        {
          label: 'Projects',
          items: [
			{ label: 'All Projects', link: '/projects/' },
            { label: 'AWS Event Microservices Platform', link: '/projects/aws-event-platform/' },
            { label: 'Neurox Terminal', link: '/projects/neurox-terminal/' },
            { label: 'Neuronet', link: '/projects/neuronet/' },
          ],
        },
        { label: 'About', link: '/about/' },
      ],
      customCss: ['./src/styles/neuronet-theme.css'],
    }),
  ],
});