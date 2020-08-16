const createTestPage = require('./createTestPage')

const createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  createTestPage(createPage)
}

module.exports = createPages