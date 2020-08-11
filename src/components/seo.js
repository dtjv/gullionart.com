import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, lang, meta = [], title }) => {
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
  const pageLanguage = lang || "en-US"

  return (
    <Helmet
      htmlAttributes={{ pageLanguage }}
      title={pageTitle}
      meta={[
        {
          name: `description`,
          content: pageDescription,
        },
        {
          property: `og:title`,
          content: pageTitle,
        },
        {
          property: `og:description`,
          content: pageDescription,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
    >
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Helmet>
  )
}

export default SEO
