const React = require("react")
const Layout = require("./src/components/Layout").default
const { ThemeProvider } = require('@material-ui/core/styles')
const theme = require('./src/theme').default

exports.wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props}>
      {element}
    </Layout>
  )
}

exports.wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      {element}
    </ThemeProvider>
  )
}