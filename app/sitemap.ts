import { MetadataRoute } from 'next';
import { SERVICES_DATA } from '@/data/companyData';
import { BLOG_POSTS } from '@/data/blogData';
import { LOCATIONS_DATA } from '@/data/locationsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sasoftwareinnovation.com';

  const locationUrls = LOCATIONS_DATA.map((loc) => ({
    url: `${baseUrl}/locations/${loc.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const serviceUrls = SERVICES_DATA.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const blogUrls = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    ...serviceUrls,
    ...blogUrls,
    ...locationUrls,
  ];
}
