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
import "./index.css";

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
      <div className="hero-container">
        <div className="hero-container__inner">
          <h2 style={{ fontSize: "50px" }}>Nipuna Gunathilake</h2>
          <p>
            Hello! I am a software engineer who loves building great products.
          </p>
          <ul className="logo-items">
            <a href="https://github.com/nipuna777/">
              <GithubIcon aria-label="Github" className="logo-item" />
            </a>
            <a href="https://www.linkedin.com/in/nipuna777">
              <LinkedInIcon className="logo-item" />
            </a>
            <a href="https://stackoverflow.com/users/3156644/nipuna777">
              <StackOverflowIcon className="logo-item" />
            </a>
            <a href="mailto:nipuna777@gmail.com">
              <EnvelopeIcon className="logo-item" />
            </a>
          </ul>
        </div>
        <Img
          className="hero-container__profile-photo"
          fluid={profile.childImageSharp.fluid}
          alt="Nipuna profile"
        />
      </div>
    </FullWidthContent>
    <FullWidthContent>
      <div className="blog-post-container">
        <SectionTitle title="Blog Posts" viewAllLink="/blog" />
        <div className="blog-post-container__inner">
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
      <div className="project-preview">
        <div>
          <h4>{title}</h4>
          <p>{excerpt} </p>
          <a href="/work">Explore</a>
        </div>
        <Img
          className="project-preview__image"
          fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
        />
      </div>
    </FullWidthContent>
  </div>
);

const BlogPostPreview = ({ title, excerpt, path }) => (
  <div className="blog-post-preview">
    <h3>{title}</h3>
    <p>{excerpt}</p>
    <Link to={path}>Read More</Link>
  </div>
);

const SectionTitle = ({ title, viewAllLink }) => (
  <div className="section-title">
    <h1 className="section-title-header">{title}</h1>
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
