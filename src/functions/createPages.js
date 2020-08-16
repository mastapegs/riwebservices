const createTestPage = require('./createTestPage')
const createBlogPages = require('./createBlogPages')

const createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  createTestPage(createPage)
  createBlogPages({ graphql, createPage })
}

module.exports = createPages