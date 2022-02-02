import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import FullWidthContent from "../components/full-width-content";
import PageTitle from "../components/page-title";
import Img from "gatsby-image";
import "./about.css";
import { graphql } from "gatsby";

const AboutPage = ({ data: { profile } }) => (
  <Layout>
    <Seo title="About" />
    <FullWidthContent>
      <PageTitle title="About" />
    </FullWidthContent>
    <FullWidthContent>
      <div className="about-container">
        <div>
          <h2>Hello, I am Nipuna Gunathilake.</h2>
          <p>
            Hey there! I’m Nipuna Gunathilake and this is my home page. Thank
            you for dropping by{" "}
            <span role="img" aria-label={"wave"}>
              👋
            </span>
          </p>
          <p>
            I am a frontend Developer from the sunny island of Sri Lanka who
            loves building good User Experiences.
          </p>
          <p>
            I’m currently working in Singapore and love all things tech. I’m a
            software engineer by trade (and I code it my free time as well).
            Currently, I’m doing frontend and mobile development with all the
            exciting new frameworks. Please feel free to take a look around and
            give me a shout via the email link on the home page.
          </p>

          <h3>Books I've liked</h3>

          <h4>Software Engineering/Product</h4>
          <ul>
            <li>
              The Phoenix Project - Gene Kim, George Spafford, and Kevin Behr
            </li>
            <li>The Mythical Man Month - Fred Brooks</li>
            <li>
              Blood, Sweat, and Pixels: The Triumphant, Turbulent Stories Behind
              How Video Games Are Made - Jason Schreier
            </li>
            <li>Don't Make Me Think - Steve Krug</li>
            <li>Design of Everyday things - Don Norman</li>
          </ul>
          <h4>Misc.</h4>
          <ul>
            <li>
              Factfulness: Ten Reasons We're Wrong About the World--and Why
              Things Are Better Than You Think - Anna Rosling Rönnlund, Hans
              Rosling, and Ola Rosling
            </li>
            <li>So Good They Can't Ignore You - Cal Newport</li>
            <li>
              Winners Take All: The Elite Charade of Changing the World - Anand
              Giridharadas
            </li>
            <li>How to Build a Car - Adrian Newey </li>
          </ul>
        </div>
        <div style={{ minWidth: "250px", marginLeft: "30px" }}>
          <Img fluid={profile.childImageSharp.fluid} alt="Nipuna profile" />
        </div>
      </div>
    </FullWidthContent>
  </Layout>
);

export default AboutPage;

export const pageQuery = graphql`
  query {
    profile: file(relativePath: { eq: "nipuna-profile.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
