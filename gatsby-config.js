module.exports = {
  siteMetadata: {
    title: `Code With Taylor`,
    description: `This is a personal blog where I share what I am learning in code/programming. I'll also discuss parenting, goals, nutrition, and wellness. Things I'm passionate about and I hope you are or will be too!`,
    author: `Taylor J Covington`,
    siteUrl: 'https://codewithtaylor.com/'
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["300", "400", "500"],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Code With Taylor Blog`,
        short_name: `CWT`,
        start_url: `/`,
        background_color: `#e6fefd`,
        theme_color: `#e6fefd`,
        display: `minimal-ui`,
        icon: `src/images/lion-logo-transp.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify`,  // must be last in the file
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
