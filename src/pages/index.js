import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Nav from '../components/nav'
import SEO from '../components/seo'
import Img from 'gatsby-image'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "rb-art.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO />
      <div className="relative h-screen font-sans antialiased text-gray-900 md:hidden home">
        <Nav classes="bg-white" />
        <div className="px-4 pt-24">
          <h1 className="text-5xl font-extrabold leading-none">Rich Gullion</h1>
          <p className="text-xl font-extrabold tracking-tighter uppercase sm:text-2xl">
            Artist
          </p>
          <div className="mt-6">
            <Link
              to="gallery"
              aria-label="go to gallery page"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-purple-700 border border-transparent leading-6 rounded-md shadow-sm focus:outline-none transition ease-in-out duration-150 hover:bg-purple-500"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden font-sans antialiased text-gray-800 md:block">
        <div className="flex flex-row">
          <div className="w-1/2">
            <Nav />
            <div className="flex items-center px-12 py-8">
              <div>
                <h1 className="text-5xl font-bold leading-none">
                  Rich Gullion
                </h1>
                <p className="text-2xl font-semibold uppercase">Artist</p>
                <p className="mt-6 text-xl">
                  Welcome to my studio of visual literacy! If you have questions
                  about my art or would like to visit my studio, please contact
                  me.
                </p>
                <p className="mt-6 text-xl">Sincerely,</p>
                <p className="mb-6 text-xl">
                  <strong> Rich </strong>
                </p>
                <Link
                  to="gallery"
                  aria-label="go to gallery page"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold bg-teal-400 border border-transparent leading-6 rounded-md shadow-sm focus:outline-none focus:text-gray-600 transition ease-in-out duration-150 hover:bg-teal-300"
                >
                  View Gallery
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="w-full">
              <Img
                fluid={data.file.childImageSharp.fluid}
                alt="artwork"
                className="object-cover h-auto h-screen"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
