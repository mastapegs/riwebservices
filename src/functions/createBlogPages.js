const path = require('path')

const createBlogPages = async ({ graphql, createPage }) => {

  const result = await graphql(`
  query BlogList {
    allPrismicBlog {
      edges {
        node {
          uid
        }
      }
    }
  }
  `)

  if (result.errors) {
    throw result.errors
  }

  result.data.allPrismicBlog.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.uid}`,
      component: path.resolve(`src/templates/blogPost.js`),
      context: {
        uid: edge.node.uid,
      }
    })
  })

}

module.exports = createBlogPages