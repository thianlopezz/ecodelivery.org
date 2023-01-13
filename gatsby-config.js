module.exports = {
  siteMetadata: {
    siteUrl: `https://ecodelivery.org`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: `Open Sans:wght@300;600`,
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ecodelivery Galapagos`,
        short_name: `Ecodelivery`,
        start_url: `/`,
        background_color: `#2d2d2d`,
        theme_color: `#0873e8`,
        display: `standalone`,
        icon: `assets/appicon.png`,
        include_favicon: true,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: ["/privacy", `/legal`],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-165834512-1",
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://ecodelivery.org",
        sitemap: "https://ecodelivery.org/sitemap.xml",
        policy: [
          { userAgent: "*", allow: "/", disallow: ["/privacy", "/legal"] },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
  ],
}
