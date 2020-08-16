const path = require('path')

const createBlogPages = async ({ graphql, createPage }) => {

  await graphql(`
  query BlogList {
    allPrismicBlog {
      edges {
        node {
          uid
        }
      }
    }
  }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    } else {
      result.data.allPrismicBlog.edges.forEach(edge => {
        createPage({
          path: `/blog/${edge.node.uid}`,
          component: path.resolve(`src/templates/blogPost.js`),
        })
      })
    }
  })
}

module.exports = createBlogPages