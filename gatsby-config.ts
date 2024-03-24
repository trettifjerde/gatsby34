import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `trettifjerde portfolio`,
    siteUrl: `https://trettifjerde.vercel.app/`,
    imageUrl: '/hi.png'
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "name": "trettifjerde portfolio",
        "icon": "src/images/icon.png",
        "theme_color": `#2e3535`,
        "background_color": `#2e3535`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "projects",
        "path": './src/projects/'
      },
      __key: "projects"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "hellos",
        "path": './src/hellos/'
      },
      __key: "hellos"
    },
  ]
};

export default config;
