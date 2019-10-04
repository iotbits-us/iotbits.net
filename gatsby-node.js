const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

// Create pages from markdown files
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve) => {
    resolve(
      graphql(
        `
          query {
            products: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/products/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    path
                    title
                    date(formatString: "DD MMMM YYYY")
                  }
                  excerpt
                }
              }
            }
            team: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/team/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    path
                    title
                    date(formatString: "DD MMMM YYYY")
                  }
                  excerpt
                }
              }
            }
            testimonials: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/testimonials/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    path
                    title
                    date(formatString: "DD MMMM YYYY")
                  }
                  excerpt
                }
              }
            },
            posts: allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                  }
                }
              }
            }
          }
        `,
      ).then((result) => {
        result.data.products.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/product.js');
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id,
            },
          });
        });
        result.data.team.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/team.js');
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id,
            },
          });
        });
        result.data.testimonials.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/testimonial.js');
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id,
            },
          });
        });
        resolve();
      }),
    );
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};
