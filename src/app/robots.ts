import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://dmndev-resume.vercel.app/sitemap.xml',
    host: 'https://dmndev-resume.vercel.app',
  };
}
