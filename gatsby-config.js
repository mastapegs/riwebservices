/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://riwebservices.com`,
  },
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
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `riwebservices`,
        accessToken: `${process.env.PRISMIC_API_KEY}`,
        schemas: {
          home: require("./src/schemas/home.json"),
          pricing: require("./src/schemas/pricing.json"),
        },
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-175299660-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
  ],
}
