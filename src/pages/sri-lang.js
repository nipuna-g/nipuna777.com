import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import FullWidthContent from "../components/full-width-content";
import PageTitle from "../components/page-title";
import { graphql } from "gatsby";
import './sri-lang.css'

const SriLangPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const SriLangEntries = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map((edge, i) => (
      <SriLangItem index={i} key={edge.node.id} post={edge.node} />
    ));


  return (
    <Layout>
      <Seo title="Sri Lang - Notes" />
      <FullWidthContent>
        <PageTitle title="Sri-Lang Notes" />
      </FullWidthContent>

      <FullWidthContent>
        {SriLangEntries}
      </FullWidthContent>
    </Layout>
  )
};

export default SriLangPage;
export const pageQuery = graphql`{
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
      filter: {frontmatter: {type: {eq: "sri-lang"}}}
    ) {
      edges {
        node {
          id
          html
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
  `;

const SriLangItem = ({ post, index }) => {
  const date = post.frontmatter.date !== 'Invalid date' ? post.frontmatter.date : null; 
  return (
    <div className="sri-lang-post">
      <h3>{post.frontmatter.title} {date && `- ${date}`}</h3>
      <div
        dangerouslySetInnerHTML={{ __html: post.excerpt }}
      ></div>

      <a href={post.frontmatter.path} className="continue-reading">Continue Reading...</a>
      <hr />
    </div>
  );
};
