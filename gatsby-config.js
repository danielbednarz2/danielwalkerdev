module.exports = {
  siteMetadata: {
    title: "Daniel Walker",
    titleTemplate: "Daniel Walker",
    description: "Portfolio",
    url: "https://danielwalker.dev",
    image: "/public/favicon.ico",
    twitterUsername:"@danielwalkerdev",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Discover Boldly',
        icon: './src/images/logo_transparent.png'
      }
    }
  ],
};
