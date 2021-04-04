import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import FullWidthContent from "../components/full-width-content";

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <FullWidthContent>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </FullWidthContent>
  </Layout>
);

export default NotFoundPage;
