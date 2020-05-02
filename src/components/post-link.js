import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const PostLink = ({ post }) => (
  <div
    style={{
      display: "flex",
      maxHeight: 300,
      marginBottom: 20,
    }}
  >
    <Img
      style={{ margin: 0, width: 170, height: 170, backgroundColor: "#eee" }}
      fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
    />
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        border: "1px solid #b5cce3",
      }}
    >
      <h3 style={{ margin: 0, padding: 0 }}>{post.frontmatter.title}</h3>
      <span style={{ fontSize: 12 }}>{post.frontmatter.date}</span>
      <p style={{ marginBottom: 5, fontSize: 14, lineHeight: 1.5 }}>
        {post.excerpt}
      </p>
      <Link
        to={post.frontmatter.path}
        style={{ textDecoration: "none", fontSize: 14 }}
      >
        Read More...
      </Link>
    </div>
  </div>
);
export default PostLink;
