/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const siteNavigation = [
    { title: "Blog", link: "blog" },
    { title: "Work", link: "work" },
    { title: "Resume", link: "resume" },
    { title: "About", link: "about" },
  ];

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteNavigation={siteNavigation}
      />
      <div
        style={{
          margin: `0 auto`,
          width: "100%",
          flex: 1,
        }}
      >
        <main>{children}</main>
      </div>
      <footer
        style={{
          border: "1px solid #eee",
          fontSize: "12px",
          textAlign: "center",
        }}
      >
        Built By Nipuna Gunathilake ·{" "}
        <a href="https://github.com/nipuna777/nipuna777.com">Source Code</a>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
