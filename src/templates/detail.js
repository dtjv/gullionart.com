import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../layout'
import SEO from '../components/seo'

export default ({ data, pageContext }) => {
  const { artPiece } = pageContext

  return (
    <Layout>
      <SEO />
      <div className="px-4 py-8 md:px-12">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <div className="lg:pr-8">
              <h1 className="text-5xl font-bold leading-none text-purple-700">
                {artPiece.title}
              </h1>
              <hr className="mt-4" />
              {artPiece.description ? (
                <p className="mt-2 lg:mt-6 lg:text-xl">
                  {artPiece.description}
                </p>
              ) : null}
              <p className="mt-6 lg:text-xl">
                <span className="text-base font-bold tracking-wide text-purple-700 uppercase">
                  medium:
                </span>{' '}
                <span className="text-gray-700">
                  {artPiece.medium} on {artPiece.substrate}
                </span>
              </p>
              <p className="mt-2 lg:mt-2 lg:text-xl">
                <span className="text-base font-bold tracking-wide text-purple-700 uppercase">
                  size:
                </span>{' '}
                <span className="text-gray-700">
                  {artPiece.width} x {artPiece.height} ({artPiece.size_units})
                </span>
              </p>
              <p className="mt-2 lg:mt-2 lg:text-xl">
                <span className="text-base font-bold tracking-wide text-purple-700 uppercase">
                  created:
                </span>{' '}
                <span className="text-gray-700">{artPiece.create_date}</span>
              </p>
              <p className="mt-2 lg:mt-2 lg:text-xl">
                <span className="text-base font-bold tracking-wide text-purple-700 uppercase">
                  price:
                </span>{' '}
                <span className="text-gray-700">${artPiece.price}</span>
              </p>
              <p className="mt-2 lg:mt-2 lg:text-xl">
                <span className="text-base font-bold tracking-wide text-purple-700 uppercase">
                  status:
                </span>{' '}
                <span className="text-gray-700">{artPiece.status}</span>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="pt-8 lg:pt-0">
              <Img
                fluid={data.file.childImageSharp.fluid}
                alt={artPiece.title || artPiece.filename}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($filename: String!) {
    file(base: { eq: $filename }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
