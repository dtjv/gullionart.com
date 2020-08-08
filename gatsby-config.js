module.exports = {
  siteMetadata: {
    title: "Rich Gullion",
    author: {
      name: "Rich Gullion",
    },
    description: "Rich Gullion - Artist",
    siteUrl: "http://richardgullionart.com/",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("postcss-import"),
          require("tailwindcss"),
          require("autoprefixer"),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rich Gullion`,
        short_name: `Rich Gullion`,
        description: `Artist`,
        start_url: `/`,
        background_color: "white",
        theme_color: "white",
        display: `minimal-ui`,
        icon: `static/logo.png`,
      },
    },
  ],
}
