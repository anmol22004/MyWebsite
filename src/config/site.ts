/**
 * Site-wide configuration — single source of truth for identity,
 * external URLs, and navigation. Update here, not in components.
 */

export const site = {
  name:        'Anmol Agarwal',
  url:         'https://www.1mol.in',
  ogImage:     '/images/og-image.svg',
  email:       'anmol22004@gmail.com',
  description: 'Software engineer building data pipelines, trading systems, and ML applications.',

  social: {
    github:   'https://github.com/anmol22004',
    linkedin: 'https://www.linkedin.com/in/anmol22004/',
    twitter:  'https://twitter.com/imanmolag',
    imdb:     'https://www.imdb.com/user/p.5u7f6lubcjejompimc5ypd6quy/ratings/',
  },

  nav: [
    { label: 'About',    path: '/about'    },
    { label: 'Projects', path: '/projects' },
    { label: 'Blog',     path: '/blog'     },
    { label: 'Films',    path: '/films'    },
  ],

  resume: 'https://drive.google.com/uc?export=download&id=1eWfnrdcKq3Yfr554J3dLgi-pbzHt5ssB',
} as const

export type Site = typeof site
