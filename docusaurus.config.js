// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dokumentasi Sistem Informasi SItuba',
  tagline: 'Spesifikasi Sistem Informasi Penanggulangan TBC Kota Surakarta',
  favicon: 'img/favicon.ico',

  url: 'https://l0c4lxid.github.io',
  baseUrl: '/docs-SItuba/',

  onBrokenLinks: 'ignore',

  i18n: {
    defaultLocale: 'id',
    locales: ['id'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // Serve docs at site root
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'SItuba Docs',
        logo: {
          alt: 'SItuba Logo',
          src: 'img/situba-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Panduan Penggunaan',
          },
          {
            href: 'https://situba.my.id',
            label: 'Buka Aplikasi SItuba',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'SItuba Logo',
          src: 'img/situba-logo.png',
          height: 40,
        },
        copyright: `Copyright © ${new Date().getFullYear()} Portal Dokumentasi Sistem Informasi SItuba (situba.my.id).`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
