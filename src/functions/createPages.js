const path = require('path')

const createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve(`src/templates/test.js`)

  createPage({
    path: '/test',
    component: pageTemplate,
  })

}

module.exports = createPages