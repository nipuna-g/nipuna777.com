import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import FullWidthContent from "../components/full-width-content";
import PageTitle from "../components/page-title";
import PostLink from "../components/post-link";
import { graphql } from "gatsby";

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout>
      <Seo title="Blog" />
      <FullWidthContent>
        <PageTitle title="Blog" />
      </FullWidthContent>
      <FullWidthContent>{Posts}</FullWidthContent>
    </Layout>
  );
};

export default BlogPage;
export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: null } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
