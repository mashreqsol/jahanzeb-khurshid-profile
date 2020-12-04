/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
//plugins: ["gatsby-plugin-sass"],
siteMetadata: {
  title: "Jahanzeb Khurshid",
  description: "I learn JavaScript, React, GraphQL and Gatsby",
  author: "Jahanzeb Khurshid Kalyani",
},



  plugins: [

    {
      resolve: `gatsby-plugin-sass`,
      options: {
          implementation: require('sass')
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    //"gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 450,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],

}