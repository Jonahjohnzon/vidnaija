export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ['/adhome', '/adminbaby','/addmovies','/addseries','/edit','/upcoming','/dmca','/download','/notification','/passforget','/profile','/activate','/download']
      },
      sitemap: 'https://vidnaija.com.ng/sitemap.xml',
    }
  }