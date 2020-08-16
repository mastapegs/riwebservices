const createTestPage = require('./createTestPage')
const createBlogPages = require('./createBlogPages')

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  createTestPage({ createPage })
  await createBlogPages({ graphql, createPage })
}

module.exports = createPages