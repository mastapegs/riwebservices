const React = require("react")
const Layout = require("./Layout").default

const pageWrapper = ({ element, props }) => {
  return (
    <Layout {...props}>
      {element}
    </Layout>
  )
}

export default pageWrapper