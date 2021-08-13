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
  themeConfig: {
    navbar: {
      title: 'Sledgehammer Discord Bot',
      logo: {
        alt: 'Momentum Free Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },/*
        {to: '/blog', label: 'Blog', position: 'left'},*/
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
              label: 'Welcome!',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/UUc7ZhSaPw',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/Momentum-Free/',
            },
          ],
        },
        {
          title: 'More',
          items: [
/*            {
              label: 'Blog',
              to: '/blog',
            },*/
            {
              label: 'GitHub',
              href: 'https://github.com/Momentum-Free/',
            },
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
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/Momentum-Free/welcome/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
