module.exports = {
    title: 'Smartloop',
    description: 'Supercharge Lead Capture with Conversational AI.',
    base : '/',
    themeConfig: {
        displayAllHeaders: true,
        sidebarDepth: 2,
        nav: [
          {text: 'Home', link: 'https://smartloop.ai' }
          , { text: 'Dashboard', link: 'https://dashboard.smartloop.ai' }
          , { text: 'Blog', link: 'https://blog.recime.io' }
        ],
        sidebar: [
            '/getting-started',
            '/basic-concepts',
            '/how-to-entities',
            '/user-attributes',
            '/capturing-user-input',
            '/redirect-using-go-to',
            '/json-api',
            '/sending-email-notification',
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
            '/resources'
          ]
          ,lastUpdated: 'Last Updated' // string | boolean
      },
      plugins: {
        'sitemap': {
          hostname: 'https://docs.smartloop.ai'
        }
      }
  }
