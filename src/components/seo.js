import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ description, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  )
  const pageDescription = description || site.siteMetadata.description
  const pageTitle = title || site.siteMetadata.title

  return (
    <Helmet>
      <html lang="en-US" />
      <title>{pageTitle}</title>
      <link rel="canonical" href={site.siteMetadata.siteUrl} />
      <meta name="description" content={pageDescription} />

      <meta property="og:url" content={site.siteMetadata.siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />

      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Helmet>
  )
}

export default SEO
