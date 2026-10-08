import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SA Software Innovation',
    short_name: 'SA Innovation',
    description: 'High-Performance Websites, Legacy Modernization & Cross-Border SEO',
    start_url: '/',
    display: 'standalone',
    background_color: '#f5f5f7',
    theme_color: '#0071e3',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
