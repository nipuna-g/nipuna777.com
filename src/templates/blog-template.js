import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import FullWidthContent from "../components/full-width-content";
import PageTitle from "../components/page-title";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Seo title={frontmatter.title} />
      <FullWidthContent>
        <PageTitle title={frontmatter.title} />
        <span style={{ display: "block", fontSize: 14 }}>
          {frontmatter.date}
        </span>
        <div
          style={{ marginTop: 16 }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </FullWidthContent>
    </Layout>
  );
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
