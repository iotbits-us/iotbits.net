module.exports = {
  siteMetadata: {
    title: 'IOTBITS',
    author: 'Evert Arias',
    description: 'Providing toilored IoT solutions for industries and makers',
    siteUrl: 'https://iotbits.net/',
    contact: {
      phone: '+1 (786) 460-2431',
      email: 'support@iotbits.net',
      telegram: 'https://t.me/IOTBITS',
    },
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'About Us',
        link: '/about-us',
      },
      {
        name: 'Products',
        link: '/products',
      },
      {
        name: 'Blog',
        link: 'https://blog.iotbits.net',
      },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
    social: {
      Twitter: '',
    },
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'https://api.iotbits.net',
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          'product',
          'company-feature',
          'post',
          'author',
        ],
        queryLimit: 1000,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-158635021-2',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-material-ui',
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
  ],
};
