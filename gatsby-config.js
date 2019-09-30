const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;

export const siteMetadata = {
  title: 'IOTBITS',
  description: 'Toilored IoT solution for industries and makers',
  contact: {
    phone: '+1 (786) 460-2431',
    email: 'support@iotbits.net',
  },
  menuLinks: [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Blog',
      link: '/',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
  ],
};
export const plugins = [
  'gatsby-plugin-sass',
  'gatsby-transformer-json',
  'gatsby-transformer-remark',
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
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: guid ? guid : 'UA-XXX-1',
      // Puts tracking script in the head instead of the body
      head: false,
    },
  },
  {
    resolve: 'gatsby-source-strapi',
    options: {
      apiURL: 'https://api.iotbits.net',
      queryLimit: 1000,
      contentTypes: ['products'],
    },
  },
];
