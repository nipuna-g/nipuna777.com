import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import FullWidthContent from "../components/full-width-content";
import GithubIcon from "../images/icons/github.svg";
import EnvelopeIcon from "../images/icons/envelope.svg";
import LinkedInIcon from "../images/icons/linkedin.svg";
import StackOverflowIcon from "../images/icons/stackoverflow.svg";
import Img from "gatsby-image";

const logoItem = {
  padding: 0,
  margin: 0,
  textAlign: "center",
  marginRight: "10px",
  height: "30px",
};

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
    profile,
  },
}) => (
  <Layout>
    <SEO title="Home" />
    <FullWidthContent
      style={{
        background:
          "linear-gradient(180deg, rgba(221,239,255,1) 0%, rgba(255,255,255,1) 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "30px 0",
          borderBottom: "1px solid #DFE3F8",
        }}
      >
        <div
          style={{
            width: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2 style={{ fontSize: "50px" }}>Nipuna Gunathilake</h2>
          <p>
            Hello! I am a software engineer who loves building great products.
          </p>
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <a href="https://github.com/nipuna777/">
              <GithubIcon aria-label="Github" style={logoItem} />
            </a>
            <a href="https://www.linkedin.com/in/nipuna777">
              <LinkedInIcon style={logoItem} />
            </a>
            <a href="https://stackoverflow.com/users/3156644/nipuna777">
              <StackOverflowIcon style={logoItem} />
            </a>
            <a href="mailto:nipuna777@gmail.com">
              <EnvelopeIcon style={logoItem} />
            </a>
          </ul>
        </div>
        <Img
          style={{
            borderRadius: "50%",
            height: "280px",
            width: "280px",
          }}
          fluid={profile.childImageSharp.fluid}
          alt="Nipuna profile"
        />
      </div>
    </FullWidthContent>
    <FullWidthContent>
      <div style={{ borderBottom: "1px solid #DFE3F8" }}>
        <SectionTitle title="Blog Posts" viewAllLink="/blog" />
        <div
          style={{
            display: "flex",
            marginTop: "30px",
            marginBottom: "20px",
            flexWrap: "wrap",
            marginRight: "-20px",
          }}
        >
          {edges
            .filter(edge => !edge.node.frontmatter.type)
            .map(edge => (
              <BlogPostPreview
                title={edge.node.frontmatter.title}
                excerpt={edge.node.excerpt}
                path={edge.node.frontmatter.path}
              />
            ))}
        </div>
      </div>
    </FullWidthContent>
    <FullWidthContent>
      <SectionTitle title="Project" viewAllLink="/work" />
    </FullWidthContent>

    {edges
      .filter(edge => edge.node.frontmatter.type === "project")
      .map((edge, index) => (
        <ProjectPreview
          index={index}
          title={edge.node.frontmatter.title}
          excerpt={edge.node.excerpt}
          path={edge.node.frontmatter.path}
          post={edge.node}
        />
      ))}
  </Layout>
);

export default IndexPage;

const pastalColors = [
  "#FFFFD877",
  "#B5EAD777",
  "#E0FEFE77",
  "#FFDAC177",
  "#C7CEEA77",
  "#FF9AA277",
];

const ProjectPreview = ({ index, post, title, excerpt }) => (
  <div style={{ backgroundColor: pastalColors[index % 6] }}>
    <FullWidthContent>
      <div style={{ display: "flex", margin: "50px 0" }}>
        <div>
          <h4>{title}</h4>
          <p>{excerpt} </p>
          <a href="/work">Explore</a>
        </div>
        <Img
          style={{
            margin: 0,
            padding: 0,
            marginLeft: 30,
            minWidth: 350,
            height: 250,
            backgroundColor: "#eee",
          }}
          fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
        />
      </div>
    </FullWidthContent>
  </div>
);

const BlogPostPreview = ({ title, excerpt, path }) => (
  <div
    style={{
      maxWidth: "452px",
      minWidth: "220px",
      padding: "40px",
      border: "1px solid lightgrey",
      marginBottom: "20px",
      marginRight: "20px",
    }}
  >
    <h3>{title}</h3>
    <p>{excerpt}</p>
    <Link to={path}>Read More</Link>
  </div>
);

const SectionTitle = ({ title, viewAllLink }) => (
  <div
    style={{ display: "flex", marginTop: "50px", alignItems: "last baseline" }}
  >
    <h1 style={{ margin: 0, fontWeight: "lighter", marginRight: "10px" }}>
      {title}
    </h1>
    <a href={viewAllLink}>View All</a>
  </div>
);

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 150)
          frontmatter {
            path
            title
            type
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 350) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    profile: file(relativePath: { eq: "nipuna-profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
