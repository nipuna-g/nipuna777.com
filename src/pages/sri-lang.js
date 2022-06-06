import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import FullWidthContent from "../components/full-width-content";
import PageTitle from "../components/page-title";

const SriLangPage = () => (
    <Layout>
        <Seo title="Sri Lang" />
        <FullWidthContent>
            <PageTitle title="Sri-Lang" />
        </FullWidthContent>
        <FullWidthContent>
            <div className="Sri-lang-container">
                <h3>Day 0</h3>
                <span>2022-06-06</span>
                <p>
                    This is the first dev note on Sri-Lang(not settled on a name yet).
                </p>
                <p>
                    Sri-Lang will be a general purpouse language that can be written in Sinhalese(and in Tamil in v2).
                </p>
                <p>
                    This will be a mainly for teaching programming to children using their mothertoung.
                    The goal of the first itteration is to have a language that can be used to teach all the core programming concepts covered in the ICT A/L syllubus.
                </p>

                <h4>Definition of Done</h4>
                <ul>
                    <li>Have a language that can be used to teach the ICT syllubus in Sinhalese</li>
                    <li>Be able to execute code examples locally</li>
                    <li>Have a web-ide where users can play around with the language</li>
                </ul>

                <h5>Stretch Goals</h5>
                <ul>
                    <li>Have a Language server to make coding easier</li>
                    <li>Video tutorials on the ICT syllubus</li>
                    <li>A better programming font</li>
                </ul>

                <h5>V2</h5>
                <ul>
                    <li>Add Tamil support</li>
                </ul>

                <h4>Next steps</h4>
                <ul>
                    <li>Research into similar projects</li>
                    <li>Decide on a syntax</li>
                    <li>Learn more about building a language</li>
                    <li>Start building!</li>
                </ul>
            </div>
        </FullWidthContent>
    </Layout>
);

export default SriLangPage;
