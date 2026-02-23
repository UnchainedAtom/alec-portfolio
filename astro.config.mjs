// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Alec Estrada',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/UnchainedAtom/alec-portfolio' }],
			sidebar: [
				{ label: 'Home', link: '/' },
				{ label: 'Projects', items: [
					{ label: 'AWS Event Platform', link: '/projects/aws-event-platform/' },
					{ label: 'Terraform AWS Stack', link: '/projects/terraform-aws-stack/' },
					{ label: 'CI/CD (ECR → ECS)', link: '/projects/cicd-ecr-ecs/' },
					{ label: 'AAA Game Dev Infra Notes', link: '/projects/aaa-game-dev-infra-notes/' },
					{ label: 'Creative Pipelines', link: '/projects/creative-pipelines/' },
				]},
				{ label: 'About', link: '/about/' },
			],
		}),
	],
});
