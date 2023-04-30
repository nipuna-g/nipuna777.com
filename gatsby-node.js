const path = require(`path`);
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-template.js`);
  const result = await graphql(`{
  allMarkdownRemark(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {type: {in: [null, "sri-lang"]}}}
    limit: 1000
  ) {
    edges {
      node {
        frontmatter {
          path
        }
      }
    }
  }
}`);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      pathPrefix: "/",
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        path: node.frontmatter.path,
      }, // additional data can be passed via context
    });
  });
};
