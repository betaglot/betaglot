import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/betaglot/",
  title: "Betaglot",
  description: "See the Beta",
  lastUpdated: true,
  ignoreDeadLinks: true,
  appearance: 'dark',
  head: [
    ["link", { rel: "apple-touch-icon", href: "/Betaglot_Logo.png" }],
    ["link", { rel: "icon", type: "image/png", href: "/Betaglot_Logo.png" }]
  ],
  themeConfig: {

    outline: [2, 4],
    logo: 'Betaglot_Logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/betaglot/betaglot' }
    ],
    footer: {
      message: "Library released under <a style='text-decoration:underline;' href='https://github.com/betaglot/betaglot/blob/main/LICENSE'>MIT License</a>.",
      copyright: `Copyright © 2024–${new Date().getUTCFullYear()} Christopher Duncan`
    },
    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

  }
})
