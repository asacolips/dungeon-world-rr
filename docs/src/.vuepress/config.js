const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Dungeon World',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    searchMaxSuggestions: 15,
    nav: [
      {
        text: 'Playing',
        link: '/playing/'
      },
      {
        text: 'Classes',
        link: '/classes/'
      },
      {
        text: 'Equipment',
        link: '/equipment/'
      },
      {
        text: 'GMing',
        link: '/gm/'
      },
      {
        text: 'Monsters',
        link: '/monsters/'
      },
      {
        text: 'Appendices',
        link: '/appendices/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: null,
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
      '/playing/': [
        {
          title: null,
          collapsable: false,
          children: [
            '',
            'playing-the-game',
            'example-of-play',
            'character-creation',
            'moves',
            'basic-moves',
            'special-moves',
          ]
        }
      ],
      '/classes/': [
        {
          title: null,
          collapsable: false,
          children: [
            '',
            'the-barbarian',
            'the-bard',
            'the-cleric',
            'the-cleric-spells',
            'the-druid',
            'the-fighter',
            'the-immolator',
            'the-paladin',
            'the-ranger',
            'the-thief',
            'the-wizard',
            'the-wizard-spells'
          ]
        }
      ],
      '/equipment/': [
        {
          title: null,
          collapsable: false,
          children: [
            '',
            'tags',
            'weapons',
            'armor',
            'dungeon-gear',
            'poisons',
            'expenses',
            'magic-items'
          ]
        }
      ],
      '/gm/': [
        {
          title: null,
          collapsable: false,
          children: [
            '',
            'first-session',
            'fronts',
            'the-world',
            'advanced-delving'
          ]
        }
      ],
      '/monsters/': [
        {
          title: null,
          collapsable: false,
          children: [
            '',
            'caverns',
            'depths',
            'experiments',
            'folk',
            'hordes',
            'planes',
            'swamp',
            'undead',
            'woods'
          ]
        }
      ],
      '/appendices/': [
        {
          title: null,
          collapsable: false,
          children: [
            '',
            'basic-moves',
            'special-moves',
            'teaching',
            'conversion',
            'npcs'
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'vuepress-plugin-child-toc'
  ]
}
