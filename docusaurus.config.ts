import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Preparation Guide for SDE',
  tagline: 'A structured, language-agnostic 16-week plan to grow from solid SDE-I to a strong backend SDE-II.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://sdeguide.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ThePratikSah',
  projectName: 'sde-ii-guide',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ThePratikSah/sde-ii-guide/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ThePratikSah/sde-ii-guide/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'SDE-II Guide',
      // logo: {
      //   alt: 'SDE-II Guide Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Guide',
        },
        { to: '/docs/weeks/week-01', label: 'Weekly Plans', position: 'left' },
        {
          href: 'https://github.com/ThePratikSah/sde-ii-guide',
          label: 'GitHub',
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
              label: 'Guide',
              to: '/docs/intro',
            },
            {
              label: 'Role Understanding',
              to: '/docs/getting-started/role-understanding',
            },
            {
              label: 'Weekly Plans',
              to: '/docs/weeks/week-01',
            },
          ],
        },
        {
          title: 'Follow Me',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ThePratikSah',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/pratiksah',
            },
            {
              label: 'X',
              href: 'https://x.com/sahji_',
            },
          ],
        },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/ThePratikSah/docusaurus',
        //     },
        //   ],
        // },
      ],
      // You can use HTML inside the copyright string in Docusaurus:
      copyright: `No rights reserved. Update this guide as you go along - ${new Date().getFullYear()} | <a href="https://madewithloveinindia.org" target="_blank">Made with <span aria-label="Love" style="color: #f43f5e">&hearts;</span> in India</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
