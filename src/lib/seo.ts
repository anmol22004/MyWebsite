import { site } from '@/config/site'

/**
 * Build a fully-resolved set of meta-tag values for a page,
 * filling in defaults from site config.
 */
export function buildMeta(opts: {
  title?: string
  description?: string
  image?: string
  path?: string
} = {}) {
  return {
    title:       opts.title ? `${opts.title} — ${site.name}` : site.name,
    description: opts.description ?? site.description,
    image:       opts.image       ?? site.ogImage,
    url:         `${site.url}${opts.path ?? ''}`,
  }
}
