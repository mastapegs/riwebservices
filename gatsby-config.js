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
          blog: require("./src/schemas/blog.json"),
        },
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-175299660-1",
        head: true,
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: 'gatsby-plugin-prismic-preview',
      options: {
        repositoryName: 'riwebservices',
        linkResolver: require('./src/linkResolver'),
        path: '/preview',
      }
    }
  ],
}
