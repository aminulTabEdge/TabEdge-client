import type { MetadataRoute } from 'next'
 
const robots=(): MetadataRoute.Robots=> {
  return {
    rules: {
      userAgent: '*',
      allow: '*',
      disallow: '/private/',
    },
    sitemap: 'https://tabedge.com/sitemap.xml',
  }
}

export default robots