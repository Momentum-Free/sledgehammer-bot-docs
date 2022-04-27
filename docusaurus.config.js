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
  projectName: 'welcome', // Usually your repo name.
  projectName: 'Sledgehammer Discord Bot', // Usually your repo name.
  themeConfig: {
    colorMode: { defaultMode: 'dark' },
    metadata: [
      {
        name: 'theme-color',
        content: '#5865F2'
      },
      {
        property: 'og:title',
        content: 'Sledgehammer Discord Bot'
      },
      {
        property: 'og:description',
        content: 'Keeping Discord servers safer from scammers, spammers and all the malicious actors out there.'
      },
      {
        property: 'og:image',
        content: 'https://docs.sledgehammer.app/img/SledgehammerLogo.png'
      },
      {
        name: 'og:keywords',
        content: 'sledgehammer, docs, discord bot, momentum free'
      },
      {
        property: 'og:site_name',
        content: 'Sledgehammer Discord Bot Documentation'
      },
      {
        name: 'twitter:card',
        content: 'summary'
      },
      {
        name: 'twitter:site',
        content: '@MomentumFree_'
      },
      {
        name: 'twitter:title',
        content: 'Sledgehammer Discord Bot'
      },
      {
        name: 'twitter:description',
        content: 'Keeping Discord servers safer from scammers, spammers and all the malicious actors out there.'
      },
      {
        name: 'twitter:image',
        content: 'https://docs.sledgehammer.app/img/SledgehammerLogo.png'
      },
    ],
    navbar: {
      title: 'Sledgehammer Discord Bot',
      logo: {
        alt: 'Momentum Free Logo',
        src: 'img/logo.svg',
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
        // {to: '/blog', label: 'Blog', position: 'left'},
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
          sidebarCollapsed: false,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Momentum-Free/welcome/edit/master/website/',
        },
      },
    ],
  ],
};
