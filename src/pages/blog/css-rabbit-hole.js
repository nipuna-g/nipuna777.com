import React, { useState } from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import FullWidthContent from "../../components/full-width-content";
import PageTitle from "../../components/page-title";

import "./css-rabbit-hole.scss";
import { graphql } from "gatsby";

const quizOptions = ["blue", "red", "transparent"];

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const [quizAnswer, setQuizAnswer] = useState();

  return (
    <Layout>
      <Seo title="Down a CSS Rabbit hole" />
      <FullWidthContent>
        <PageTitle title="Down a CSS Rabbit hole" />
      </FullWidthContent>
      <FullWidthContent>
        <div dangerouslySetInnerHTML={{ __html: edges[0].node.html }}></div>

        <ol className={`quiz-options ${!!quizAnswer && "answered"}`}>
          {quizOptions.map((answer) => {
            let itemClass = "";
            if (answer === quizOptions[1]) {
              itemClass = "correct";
            } else if (answer === quizAnswer) {
              itemClass = "incorrect";
            }

            return (
              <li onClick={() => setQuizAnswer(answer)} className={itemClass}>
                {answer}
              </li>
            );
          })}
        </ol>

        {quizAnswer && (
          <>
            {quizOptions[1] === quizAnswer ? (
              <p>🥳 Congratulations, you got it right!</p>
            ) : (
              <p>🤔 The background color ends up `red`.</p>
            )}
            <hr />

            <div dangerouslySetInnerHTML={{ __html: edges[1].node.html }}></div>
          </>
        )}
      </FullWidthContent>
    </Layout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { fields: fileAbsolutePath }
      filter: { frontmatter: { type: { in: ["css-rabbit-hole"] } } }
      limit: 1000
    ) {
      edges {
        node {
          html
        }
      }
    }
  }
`;
