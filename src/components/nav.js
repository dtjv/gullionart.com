import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="flex items-center justify-between p-4 md:p-8">
      <div>
        <Link to="/">
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="artist initials"
            className="w-10 h-10"
          />
        </Link>
      </div>
      <div className="flex items-center">
        <Link
          to="/gallery"
          className="px-3 py-2 rounded hover:text-purple-700"
          activeClassName="font-bold text-purple-700"
        >
          Gallery
        </Link>
        <Link
          to="/about"
          className="px-3 py-2 rounded hover:text-purple-700"
          activeClassName="font-bold text-purple-700"
        >
          About
        </Link>
        <div className="inline-block">
          <a
            href="https://www.facebook.com/richard.gullion.35"
            className="block p-2 text-gray-800 hover:text-purple-700"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Facebook icon</title>
              <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Nav
