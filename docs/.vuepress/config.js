const markdownParser = require('./markdownParser');
const path = require('path');
module.exports = {
  title: 'Vue Material Kit',
  base: '/vue-material-kit/documentation/',
  markdown: {
    config: markdownParser
  },
  configureWebpack: (config, isServer) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../../src');
  },
  head: [
    ['link', { rel: 'stylesheet', href: `https://fonts.googleapis.com/icon?family=Material+Icons` }],
    ['link', { rel: 'stylesheet', href: `https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons` }],
    ['link', { rel: 'stylesheet', href: `https://use.fontawesome.com/releases/v5.0.8/css/all.css` }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon.png' }]
  ],
  themeConfig: {
    nav: [
      { text: 'v1.0.0', link: '/#' },
    ],
    repo: 'creativetimofficial/ct-vue-material-kit',
    sidebar: [
      {
        title: 'General Information',
        collapsable: false,
        children: [
          '/',
          '/component-docs/license'
        ]
      },
      {
        title: 'Components',
        collapsable: false,
        children: [
          '/component-docs/buttons',
          '/component-docs/cards',
          '/component-docs/checkboxes',
          '/component-docs/radios',
          '/component-docs/dropdown',
          '/component-docs/inputs',
          '/component-docs/textarea',
          '/component-docs/notifications',
          '/component-docs/tabs',
          '/component-docs/switch',
          '/component-docs/brand-colors',
          '/component-docs/date-pickers',
          '/component-docs/modal',
          '/component-docs/pagination',
          '/component-docs/tooltips',
          '/component-docs/badge',
          '/component-docs/material-icons',
          '/component-docs/toolbar'
        ]
      }
    ]
  }
};
