module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": "emwh2ijw",
      "dataset": "production",
      token: process.env.SANITY_TOKEN,
      watchMode: true,
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