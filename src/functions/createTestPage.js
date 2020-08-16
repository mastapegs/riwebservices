const path = require('path')

const createTestPage = (createPage) => {
  createPage({
    path: '/test',
    component: path.resolve(`src/templates/test.js`),
  })
}

export default createTestPage