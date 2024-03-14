import type { GatsbyConfig } from "gatsby";
import { HELLO } from "./src/utils/data";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `trettifjerde portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
    description: HELLO[HELLO.length - 1].section,
    themeColor: `#2e3535`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-transformer-remark",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
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
      }
    },
  ]
};

export default config;
