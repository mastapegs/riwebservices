/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-theme-material-ui',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RIWebServices`,
        short_name: `RIWebServices`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#3f51b5`,
        display: `standalone`,
        icon: `src/images/favicon/favicon.png`,
      },
    },
    'gatsby-plugin-offline',
  ],
}
