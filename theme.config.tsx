import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Footer from './components/Footer';
import { useRouter } from 'next/router';

const config: DocsThemeConfig = {

  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Satyam Docs'
      }
    }
  },

  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Satyam Docs" />
      <meta property="og:description" content="Blog Api for all. Documentation page." />
      <link rel="icon" href="https://satyamregmi.com.np/images/lion-logo.png" type="image/png" media="(prefers-color-scheme: dark)" />
    </>
  ), 

  logo: <span>Docs</span>,
  project: {
    link: 'https://github.com/regmisatyam',
  },
  chat: {
    link: 'https://instagram.com/regmisatyam',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="27" fill='currentColor' height="27" viewBox="0 0 50 50">
    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
</svg>
    )
  },
  docsRepositoryBase: 'https://github.com/regmisatyam/api_documentation',
  footer: {
    component: (
      <Footer />
      
    ),
  },
}

export default config
