import React, { useEffect } from 'react'

type Props = {
  title?: string
  description?: string
  image?: string
  url?: string
}

export default function Meta({ title, description, image, url }: Props) {
  useEffect(() => {
    if (title) document.title = title
    const setMeta = (name: string, content?: string) => {
      if (!content) return
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('name', name)
        document.head.appendChild(el)
      }
      el.content = content
    }

    const setProp = (prop: string, content?: string) => {
      if (!content) return
      let el = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('property', prop)
        document.head.appendChild(el)
      }
      el.content = content
    }

    setMeta('description', description)
    setProp('og:title', title)
    setProp('og:description', description)
    setProp('og:image', image)
    setProp('og:url', url)
    setMeta('twitter:card', 'summary_large_image')
  }, [title, description, image, url])

  return null
}
