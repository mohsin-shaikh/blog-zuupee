export let siteMetadata = {
  title: "Mohsin's blog - Mohsin's coding journey",
  author: 'Mohsin Shaikh',
  fullName: 'Mohsin Shaikh',
  headerTitle: "Mohsin's blog",
  footerTitle: "Mohsin's coding journey",
  description:
    "Mohsin's coding journey - work and life stories through the keyboard of an open-minded Software Engineer",
  language: 'en-us',
  siteUrl: 'https://blog.zuupee.com',
  siteRepo: 'https://github.com/mohsin-shaikh/blog-zuupee',
  siteLogo: '/static/images/logo.jpg',
  image: '/static/images/logo.jpg',
  socialBanner: '/static/images/logo.jpg',
  email: 'mohsinshaikh78601@gmail.com',
  github: 'https://github.com/mohsin-shaikh',
  twitter: 'https://twitter.com/_mohsin_shaikh',
  facebook: 'https://facebook.com/ms.zuupee',
  youtube: 'https://www.youtube.com/@zuupeetech8042',
  linkedin: 'https://www.linkedin.com/in/mohsin-shaikh-zuupee/',
  locale: 'en-US',
  analyticsURL: 'https://analytics.leohuynh.dev/share/jkwRskv0/leohuynh.dev',
  analytics: {
    plausibleDataDomain: 'mohsin-shaikh.vercel.app', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', //'2df62ae5-7f13-455b-8e54-c15b96ff2b8b', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  socialAccounts: {
    github: 'mohsin-shaikh',
    twitter: '_mohsin_shaikh',
    linkedin: 'mohsin-shaikh-zuupee',
  },
}

/**
 * Select a provider and use the environment variables associated to it
 * https://vercel.com/docs/environment-variables
 * --
 *
 * Visit each provider's documentation link and follow the instructions, then add the environment variable to your project.
 */
export let commentConfig = {
  provider: 'giscus', // 'giscus' | 'utterances' | 'disqus',
  // https://giscus.app/
  giscusConfig: {
    repo: '', // process.env.GISCUS_REPO
    repositoryId: '', // process.env.GISCUS_REPOSITORY_ID
    category: '', // process.env.GISCUS_CATEGORY
    categoryId: '', // process.env.GISCUS_CATEGORY_ID
    mapping: 'title',
    reactions: '1',
    metadata: '0',
    lightTheme: 'light',
    darkTheme: 'transparent_dark',
    themeURL: '',
  },
  // https://utteranc.es/
  utterancesConfig: {
    repo: '', // process.env.UTTERANCES_REPO
    issueTerm: '',
    label: '',
    lightTheme: '',
    darkTheme: '',
  },
  // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
  disqus: {
    shortname: '', // process.env.DISQUS_SHORTNAME
  },
}
