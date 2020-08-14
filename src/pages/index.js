import React from "react"
import { Link } from "gatsby"
import Nav from "../components/nav"
import SEO from "../components/seo"

export default () => {
  return (
    <>
      <SEO />
      <div className="relative h-screen font-sans antialiased text-gray-900 home">
        <Nav classes="bg-white" />
        <div className="px-4 pt-24 md:px-12 md:pt-40">
          <h1 className="text-4xl font-extrabold leading-none md:tracking-wide sm:text-5xl md:text-6xl">
            Richard Gullion
          </h1>
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
    </>
  )
}
