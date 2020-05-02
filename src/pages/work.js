import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import FullWidthContent from "../components/full-width-content";
import PageTitle from "../components/page-title";
import Img from "gatsby-image";

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
      <SEO title="Work" />
      <FullWidthContent>
        <PageTitle title="Work" />
      </FullWidthContent>
      {Projects}
    </Layout>
  );
};
export default WorkPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "project" } } }
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
                fluid(maxWidth: 250) {
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
        <div style={{ display: "flex" }}>
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
            <Img
              style={{
                margin: 0,
                padding: 0,
                minWidth: 300,
                height: 200,
                backgroundColor: "#eee",
              }}
              fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
            />
          </div>
        </div>
      </FullWidthContent>
    </div>
  );
};
