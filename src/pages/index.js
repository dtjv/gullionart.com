import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Nav from "../components/nav"
import SEO from "../components/seo"
import Img from "gatsby-image"

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
      <div className="font-sans antialiased text-gray-800">
        <div className="flex flex-col md:flex-row">
          <div className="w-full lg:w-1/2">
            <Nav />
            <div className="flex items-center px-4 py-8 md:px-12">
              <div>
                <h1 className="text-5xl font-bold leading-none">
                  Rich Gullion
                </h1>
                <p className="text-2xl font-semibold uppercase">Artist</p>
                <p className="mt-3 lg:mt-6 lg:text-xl">
                  Welcome to my studio of visual literacy! Say a few short words
                  about lift, art, studio, the world, etc. It doesn't need to be
                  much, just a quick intro. Perhaps a call to action to enjoy
                  the gallery.
                </p>
                <p className="mt-2 lg:mt-6 lg:text-xl">
                  If you have questions about my art or would like to visit my
                  studio, please contact me.
                </p>
                <p className="mt-2 lg:mt-6 lg:text-xl">Sincerely,</p>
                <p className="mb-6 lg:text-xl">
                  <strong> Richard Gullion </strong>
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
          <div className="w-full lg:w-1/2">
            <div className="w-full">
              <Img
                fluid={data.file.childImageSharp.fluid}
                alt="artwork"
                className="object-cover h-auto md:h-screen"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
