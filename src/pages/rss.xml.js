import { getCollection } from 'astro:content';
import { SITE_URL } from '../data/site';

function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function pillarUrl(entry) {
  return `${SITE_URL}/gids/${entry.slug}/`;
}

function spokeUrl(entry) {
  return `${SITE_URL}/gids/${entry.data.parentPillar}/${entry.slug}/`;
}

export async function GET() {
  const [pillars, clusterPosts, losseArtikelen] = await Promise.all([
    getCollection('pillars', ({ data }) => data.status === 'published'),
    getCollection('cluster-posts', ({ data }) => data.status === 'published'),
    getCollection('losse-artikelen', ({ data }) => data.status === 'published'),
  ]);

  const items = [
    ...pillars.map((p) => ({
      title: p.data.title,
      url: pillarUrl(p),
      description: p.data.metaDescription,
      pubDate: new Date(p.data.publishDate),
      category: p.data.category,
    })),
    ...clusterPosts.map((s) => ({
      title: s.data.title,
      url: spokeUrl(s),
      description: s.data.metaDescription,
      pubDate: new Date(s.data.publishDate),
      category: s.data.category,
    })),
    ...losseArtikelen.map((a) => ({
      title: a.data.title,
      url: `${SITE_URL}/${a.slug}/`,
      description: a.data.metaDescription,
      pubDate: new Date(a.data.publishDate),
      category: a.data.category,
    })),
  ]
    .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime())
    .slice(0, 25);

  const rssItems = items
    .map(
      (item) => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.url}</link>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${item.pubDate.toUTCString()}</pubDate>
      <category>${escapeXml(item.category)}</category>
      <guid isPermaLink="true">${item.url}</guid>
    </item>`
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Kenniscentrum bouwverzekeringen — Assurman</title>
    <description>Gidsen en artikelen over verzekeringen voor bouwbedrijven, aannemers en zelfstandigen in Vlaanderen.</description>
    <link>${SITE_URL}</link>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <language>nl-BE</language>
    <copyright>© ${new Date().getFullYear()} Assurman</copyright>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
