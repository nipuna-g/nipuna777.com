import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import "./post-link.css";

const PostLink = ({ post }) => (
  <div className="post-link-container">
    <Img
      className="post-link-image"
      fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
    />
    <div className="post-link-text-container">
      <h3 className="post-link-text-container__header">
        {post.frontmatter.title}
      </h3>
      <span className="post-link-text-container__date">
        {post.frontmatter.date}
      </span>
      <p className="post-link-text-container__excerpt">{post.excerpt}</p>
      <Link
        to={post.frontmatter.path}
        className="post-link-text-container__link"
      >
        Read More...
      </Link>
    </div>
  </div>
);
export default PostLink;
