// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://gatsbydrupalhomepage.gatsbyjs.io/",
    title: "Gatsby Drupal Homepage Starter",
    author: `Gatsby`,
    description: "A Gatsby Starter for building homepages with Drupal",
  },
  plugins: [
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: process.env.DRUPAL_BASE_URL,
        basicAuth: {
          username: process.env.DRUPAL_BASIC_AUTH_USERNAME,
          password: process.env.DRUPAL_BASIC_AUTH_PASSWORD,
        },
        fastBuilds: true,
        languageConfig: {
          defaultLanguage: `en`,
          enabledLanguages: [
            `en`,
            `da`,
            // add an object here if you've renamed a langcode in Drupal
            {
              langCode: `en-gb`,
              as: `da`,
            },
          ],
          translatableEntities: [`node--homepage_link`],
          nonTranslatableEntities: [`file--file`],
        },
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-vanilla-extract",
  ],
}
