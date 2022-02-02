import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import "./post-link.css";

const PostLink = ({ post }) => (
  <Link to={post.frontmatter.path} className="post-link-container">
    <GatsbyImage
      image={post.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
      className="post-link-image" />
    <div className="post-link-text-container">
      <h3 className="post-link-text-container__header">
        {post.frontmatter.title}
      </h3>
      <span className="post-link-text-container__date">
        {post.frontmatter.date}
      </span>
      <p className="post-link-text-container__excerpt">{post.excerpt}</p>
    </div>
  </Link>
);
export default PostLink;
