import { useEffect } from 'react'
import { buildMeta } from '@/lib/seo'

type Props = {
  title?: string
  description?: string
  image?: string
  path?: string
}

/**
 * Sets <head> meta tags imperatively for the current route.
 *
 * NOTE: This mutates the DOM after React mounts, so crawlers that
 * don't execute JS will see the index.html defaults. Acceptable for
 * a personal site, but consider migrating to react-helmet-async or
 * SSG (Astro/Next) once SEO becomes a priority.
 */
export function Meta(props: Props) {
  const { title, description, image, url } = buildMeta(props)

  useEffect(() => {
    document.title = title

    setAttr('meta[name="description"]',     'name',     'description', description)
    setAttr('meta[property="og:title"]',     'property', 'og:title',    title)
    setAttr('meta[property="og:description"]', 'property', 'og:description', description)
    setAttr('meta[property="og:image"]',     'property', 'og:image',    image)
    setAttr('meta[property="og:url"]',       'property', 'og:url',      url)
    setAttr('meta[name="twitter:card"]',     'name',     'twitter:card', 'summary_large_image')

    let icon = document.querySelector("link[rel='icon']") as HTMLLinkElement | null
    if (!icon) {
      icon = document.createElement('link')
      icon.rel = 'icon'
      document.head.appendChild(icon)
    }
    icon.href = '/images/icon-logo.png'
  }, [title, description, image, url])

  return null
}

function setAttr(selector: string, attr: string, key: string, content: string) {
  if (!content) return
  let el = document.querySelector(selector) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}
