import getRSS from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get() {
  const posts = await getCollection('posts');

  return getRSS({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: 'https://astro-tutorial-mu.vercel.app',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}`,
    })),
    customData: '<language>en-us</language>',
  });
}
