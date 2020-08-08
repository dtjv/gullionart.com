import React from "react"

import Nav from "../components/nav"

const Layout = ({ children }) => {
  return (
    <div className="font-sans antialiased text-gray-800">
      <div className="container mx-auto">
        <header>
          <Nav />
        </header>
        <main>{children}</main>
        <footer className="h-16" />
      </div>
    </div>
  )
}

export default Layout
