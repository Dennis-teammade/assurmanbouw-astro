import { defineCollection, z } from 'astro:content';

const faqItem = z.object({
  q: z.string(),
  a: z.string(),
});

const statusEnum = z.enum(['draft', 'published', 'archived']);

// ── Pillars ────────────────────────────────────────────────────────────────
const pillars = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pillarId: z.string(),          // e.g. "P1"
    seoTitle: z.string(),
    metaDescription: z.string(),
    primaryKeyword: z.string(),
    secondaryKeywords: z.array(z.string()).optional(),
    category: z.string(),
    sectors: z.array(z.string()).optional(),
    relatedInsurances: z.array(z.string()).optional(),
    publishDate: z.string(),       // ISO date string e.g. "2026-05-09"
    author: z.string(),            // author slug e.g. "benoit-keerman"
    readingTime: z.number(),       // minutes
    spokes: z.array(z.string()),   // spoke slugs within this pillar
    tldr: z.string().optional(),
    hubIntro: z.string(),
    hubTitle: z.string().optional(),          // short intro for hub card
    heroImage: z.string(),
    heroImageAlt: z.string(),
    faq: z.array(faqItem).optional(),
    primaryCta: z.string().optional(),
    status: statusEnum,
  }),
});

// ── Cluster posts (spokes) ─────────────────────────────────────────────────
const clusterPosts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    spokeId: z.string(),           // e.g. "P1-S1"
    parentPillar: z.string(),      // pillar slug e.g. "bouwverzekeringen"
    seoTitle: z.string(),
    metaDescription: z.string(),
    primaryKeyword: z.string(),
    secondaryKeywords: z.array(z.string()).optional(),
    category: z.string(),
    sectors: z.array(z.string()).optional(),
    relatedInsurances: z.array(z.string()).optional(),
    publishDate: z.string(),
    author: z.string(),
    readingTime: z.number(),
    targetAudience: z.string().optional(),
    tldr: z.string(),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    midContentImage: z.string().optional(),
    midContentImageAlt: z.string().optional(),
    faq: z.array(faqItem).optional(),
    relatedSpokes: z.array(z.string()).optional(),
    primaryCta: z.string().optional(),
    tileTitle: z.string().optional(),
    featured: z.boolean().optional(),
    conclusion: z.string().optional(),
    status: statusEnum,
  }),
});

// ── Losse artikelen ────────────────────────────────────────────────────────
const losseArtikelen = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    seoTitle: z.string(),
    metaDescription: z.string(),
    primaryKeyword: z.string(),
    category: z.string(),
    sectors: z.array(z.string()).optional(),
    publishDate: z.string(),
    author: z.string(),
    readingTime: z.number(),
    tldr: z.string(),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    faq: z.array(faqItem).optional(),
    featured: z.boolean().optional(),
    status: statusEnum,
  }),
});

export const collections = {
  pillars,
  'cluster-posts': clusterPosts,
  'losse-artikelen': losseArtikelen,
};
