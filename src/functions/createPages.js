const createBlogPages = require('./createBlogPages')

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  await createBlogPages({ graphql, createPage })
}

module.exports = createPages