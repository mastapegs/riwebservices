const path = require('path')

const createBlogPages = ({ graphql, createPage }) => {
  createPage({
    path: '/testBlogPage',
    component: path.resolve(`src/templates/blogPost.js`),
  })
}

module.exports = createBlogPages