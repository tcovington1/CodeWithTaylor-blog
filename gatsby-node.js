//What is the purpose of this page?
//Give you control of what's being created and registered is Gatsby

const path = require('path');


exports.createPages = async function({ graphql, actions }) {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    await graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({node}) => {
        actions.createPage({
          path: `/posts${node.frontmatter.slug}`,
          component: path.resolve('./src/components/postLayout.js'),
          context: {
            slug: node.frontmatter.slug,
          }
        });
      })
    })
    resolve();
  })
}