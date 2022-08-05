// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`,
// });

// // gatsby-config.js
// const postSearchQuery = `
// query {
//     allSanityArticulosPage {
//       nodes {
//         id
//         title
//       }
//     }
//   }
// `;


// const queries = [
//   {
//     query: postSearchQuery,
//     transformer: ({ data }) => data.allSanityArticulosPage.nodes, // optional
//   },
// ];


const siteUrl = `https://contextual.mx/`

module.exports = {
  siteMetadata: {
    siteUrl,
    title: `Coontaxtual`,
    description: `Contextual MX es un espacio de resistencia frente a quienes concentran el poder político, económico y mediático. Desde Monterrey nos sumamos a la descentralización de esta discusión con una perspectiva local, atípica y contextual.`,
    social: {
      twitter: `contextual`,
    },
    author: `contextual`,
  },
  plugins: [
    {
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": "emwh2ijw",
      "dataset": "production",
      token: process.env.SANITY_TOKEN,
      watchMode: false,
      overlayDrafts: true, 
    }
  }, "gatsby-plugin-styled-components", "gatsby-plugin-gatsby-cloud", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/assets/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/assets/images/"
    },
    __key: "images"
  },
  {
    resolve: "gatsby-plugin-mailchimp",
    options: {
      endpoint:
        "https://agency.us8.list-manage.com/subscribe/post?u=3f3a1270741981e51e3616609&amp;id=ee984f1fd2", // string; add your MC list endpoint here; see instructions below
      timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
    },
  },
]
};