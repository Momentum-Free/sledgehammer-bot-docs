const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Sledgehammer Discord Bot',
  tagline: 'Keeping Discord servers safer from scammers, spammers and all the malicious actors out there.',
  url: 'https://docs.sledgehammer.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Momentum-Free', // Usually your GitHub org/user name.
  projectName: 'Sledgehammer Discord Bot', // Usually your repo name.
  customFields: {
    image: 'img/SledgehammerLogo.png',
  },
  themeConfig: {
    navbar: {
      title: 'Sledgehammer Discord Bot',
      logo: {
        alt: 'Sledgehammer',
        src: 'img/SledgehammerLogo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        /* {to: '/blog', label: 'Blog', position: 'left'}, */
        {
          href: 'https://momentum-free.com',
          label: 'Momentum Free',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Anti-bot System',
              to: '/docs/getting-started/antibot',
            },
            {
              label: 'Config Command',
              to: '/docs/commands/config',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/5bTsAPnfje',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/Momentum-Free/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Momentum-Free/',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy Policy',
              to: 'privacy-policy',
            },
            {
              label: 'Terms of Service',
              to: 'terms-of-service',
            },
            {
              label: 'GDPR',
              to: 'gdpr',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Momentum Free, Lda.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Momentum-Free/welcome/edit/master/website/',
        },
      },
    ],
  ],
};
