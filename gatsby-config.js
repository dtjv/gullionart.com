module.exports = {
  siteMetadata: {
    title: 'Rich Gullion',
    author: {
      name: 'Rich Gullion',
    },
    description: 'Rich Gullion - Artist',
    siteUrl: 'https://gullionart.com/',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rich Gullion`,
        short_name: `Rich Gullion`,
        description: `Artist`,
        start_url: `/`,
        background_color: 'white',
        theme_color: 'white',
        display: `minimal-ui`,
        icon: `static/logo.png`,
      },
    },
  ],
}
