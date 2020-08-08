const path = require("path")
const { artwork } = require("./data/artwork.json")

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  artwork.forEach(artPiece => {
    createPage({
      path: `/${artPiece.slug}/`,
      component: path.resolve("src/templates/detail.js"),
      context: {
        artPiece,
        filename: artPiece.filename,
      },
    })
  })
}
