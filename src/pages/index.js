import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import FullWidthContent from "../components/full-width-content";
import GithubIcon from "../images/icons/github.svg";
import EnvelopeIcon from "../images/icons/envelope.svg";
import LinkedInIcon from "../images/icons/linkedin.svg";
import StackOverflowIcon from "../images/icons/stackoverflow.svg";
import { GatsbyImage } from "gatsby-plugin-image";
import "./index.css";
import { graphql } from "gatsby";

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
    profile,
  },
}) => (
  <Layout>
    <Seo title="Home" />
    <div className="hero-background">
      <FullWidthContent>
        <div className="hero-container">
          <div className="hero-container__inner">
            <h1>Nipuna Gunathilake</h1>
            <p>
              Hello! I am a software engineer who loves building great products.
              Specializing in front end development.
            </p>
            <p>
              Born and raised in Sri Lanka 🇱🇰, currently living in Singapore 🇸🇬.
            </p>
            <ul className="logo-items">
              <a href="https://github.com/nipuna-g/">
                <GithubIcon aria-label="Github" className="logo-item" />
              </a>
              <a href="https://www.linkedin.com/in/nipuna-g">
                <LinkedInIcon className="logo-item" />
              </a>
              <a href="https://stackoverflow.com/users/3156644/nipuna-g">
                <StackOverflowIcon className="logo-item" />
              </a>
              <a href="mailto:nipuna@nipuna.dev">
                <EnvelopeIcon className="logo-item" />
              </a>
            </ul>
          </div>
          <GatsbyImage
            image={profile.childImageSharp.gatsbyImageData}
            className="hero-container__profile-photo"
            loading="eager"
            alt="Nipuna profile"
          />
        </div>
      </FullWidthContent>
    </div>

    <FullWidthContent>
      <div className="blog-post-container">
        <SectionTitle title="Blog Posts" viewAllLink="/blog" />
        <div className="blog-post-container__inner">
          {edges
            .filter((edge) => !edge.node.frontmatter.type)
            .map((edge) => (
              <BlogPostPreview
                key={edge.node.frontmatter.path}
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
      .filter((edge) => edge.node.frontmatter.type === "project")
      .map((edge, index) => (
        <ProjectPreview
          index={index}
          key={edge.node.frontmatter.path}
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
        <GatsbyImage
          image={post.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
          className="project-preview__image"
        />
      </div>
    </FullWidthContent>
  </div>
);

const BlogPostPreview = ({ title, excerpt, path }) => (
  <Link className="blog-post-preview" to={path}>
    <h3>{title}</h3>
    <p className="blog-post-preview__excerpt">{excerpt}</p>
  </Link>
);

const SectionTitle = ({ title, viewAllLink }) => (
  <div className="section-title">
    <h1 className="section-title-header">{title}</h1>
    <a href={viewAllLink}>View All</a>
  </div>
);

export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
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
                gatsbyImageData(width: 350, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
    profile: file(relativePath: { eq: "nipuna-profile.jpeg" }) {
      childImageSharp {
        gatsbyImageData(width: 400, height: 400, layout: CONSTRAINED)
      }
    }
  }
`;
