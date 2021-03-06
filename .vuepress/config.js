module.exports = {
  title: 'Smartloop',
  description: 'Supercharge Lead Capture with Conversational AI.',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    displayAllHeaders: true,
    sidebarDepth: 2,
    nav: [
      { text: 'Home', link: 'https://smartloop.ai' }
      , { text: 'Dashboard', link: 'https://dashboard.smartloop.ai' }
    ],
    sidebar: [
      '/getting-started',
      '/basic-concepts',
      '/how-to-entities',
      '/user-attributes',
      '/capturing-user-input',
      '/conditional-flows',
      '/capturing-clicks',
      '/json-api',
      '/sending-email-notification',
      '/audience',
      '/campaign',
      '/broadcasting',
      '/live-chat',
      '/templates',
      '/collecting-user-data',
      '/channel',
      '/developer-features',
      '/api-access',
      '/capabilities',
      '/third-party-integrations',
      '/release-notes'
    ]
  },
  plugins: [
    '@vuepress/google-analytics',
    { ga: 'UA-91675632-2' }
  ]
}