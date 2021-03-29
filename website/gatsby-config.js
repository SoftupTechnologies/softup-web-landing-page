module.exports = {
  siteMetadata: {
    title: "Softup Technologies",
    description: "Empowering Ideas.",
    author: "@softup-technologies",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "expertise",
        path: `${__dirname}/src/images/expertise`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-anchor-links",
    "gatsby-plugin-eslint",
    {
      resolve: "gatsby-plugin-s3",
      options: {
        bucketName: "softup-website-v3",
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "Comfortaa:300,400,400i,700",
          "Roboto:100,200",
          "source sans pro",
          "Open Sans",
          "Bebas Neue",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/softup-logo.svg", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-medium",
      options: {
        username: "softup-technologies", // Medium user name
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-KG2RWMG",
        includeInDevelopment: false,
      },
    },
  ],
};
