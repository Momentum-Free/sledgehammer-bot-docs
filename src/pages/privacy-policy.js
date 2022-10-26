import Layout from "@theme/Layout";
import PrivacyPolicy from "../components/PrivacyPolicy";
import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Privacy Policy`}
      description='Keeping Discord servers safer from scammers, spammers and all the malicious actors out there'>
      <main>
        <PrivacyPolicy />
      </main>
    </Layout>
  );
}
