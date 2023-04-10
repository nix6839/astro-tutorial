import getRSS, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return getRSS({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: 'https://astro-tutorial-mu.vercel.app',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: '<language>en-us</language>',
  });
}
