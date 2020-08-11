import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../layout"
import SEO from "../components/seo"

export default () => {
  const artworkQuery = graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "artwork" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 200, maxHeight: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `
  const {
    allFile: { edges: images },
  } = useStaticQuery(artworkQuery)

  return (
    <Layout>
      <SEO />
      <div className="px-4 py-8 md:px-12">
        <div>
          <h1 className="text-5xl font-bold">Welcome...</h1>
          <p className="mt-2 mb-10 lg:text-xl">
            Through my art, I tell stories and portray scenes that reflect
            thoughts and feelings. I call this "visual literacy,” and it leaves
            the pieces open to the viewers’ interpretation. While my intention
            is present in my art, it does not obscure the viewer’s
            interpretation, which is just as valid as my own. The twists and
            turns I take during the painting process can lead me down unexpected
            pathways, though often to the right place!
          </p>
        </div>
        <div>
          <div className="gallery">
            {images.map(image => {
              const filename = `${image.node.base.split(`.`)[0]}`

              return (
                <Link
                  to={`/${filename}`}
                  key={filename}
                  aria-label={`go to detail of artwork ${filename}`}
                >
                  <Img
                    fluid={image.node.childImageSharp.fluid}
                    alt={filename}
                  />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}
