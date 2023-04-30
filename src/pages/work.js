import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import FullWidthContent from "../components/full-width-content";
import PageTitle from "../components/page-title";
import { GatsbyImage } from "gatsby-plugin-image";
import "./work.css";
import { graphql } from "gatsby";

const WorkPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Projects = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map((edge, i) => (
      <ProjectItem index={i} key={edge.node.id} post={edge.node} />
    ));

  return (
    <Layout>
      <Seo title="Work" />
      <FullWidthContent>
        <PageTitle title="Work" />
      </FullWidthContent>
      {Projects}
    </Layout>
  );
};
export default WorkPage;

export const pageQuery = graphql`{
  allMarkdownRemark(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {type: {eq: "project"}}}
  ) {
    edges {
      node {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          path
          title
          technologies
          sourceCode
          link
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 250, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
}`;

const pastalColors = [
  "#FFFFD877",
  "#B5EAD777",
  "#E0FEFE77",
  "#FFDAC177",
  "#C7CEEA77",
  "#FF9AA277",
];

const ProjectItem = ({ post, index }) => {
  return (
    <div
      style={{
        backgroundColor: pastalColors[index % 6],
        paddingTop: 30,
        paddingBottom: 30,
      }}
    >
      <FullWidthContent>
        <div className="product-container">
          <div>
            <h2 style={{ fontWeight: 500 }}>{post.frontmatter.title}</h2>
            <p>{post.excerpt}</p>
            <span style={{ fontSize: 14 }}>
              {post.frontmatter.technologies}
            </span>
            <div style={{ marginTop: 20 }}>
              <a
                style={{
                  background: "#000",
                  padding: 10,
                  marginTop: 20,
                  borderRadius: 5,
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: 14,
                }}
                href={post.frontmatter.sourceCode}
              >
                Source Code
              </a>
              <a
                style={{
                  background: "transparent",
                  padding: 10,
                  marginTop: 20,
                  marginLeft: 15,
                  borderRadius: 5,
                  textDecoration: "none",
                  fontSize: 14,
                  border: "1px solid black",
                }}
                href={post.frontmatter.link}
              >
                View Project
              </a>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              marginLeft: 20,
            }}
          >
            <GatsbyImage
              image={post.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
              className="product-container__image" />
          </div>
        </div>
      </FullWidthContent>
    </div>
  );
};
