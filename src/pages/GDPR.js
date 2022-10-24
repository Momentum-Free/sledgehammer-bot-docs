import GDPR from "../components/GDPR";
import Layout from "@theme/Layout";
import React from "react";

export default function Home() {
  return (
    <Layout
      title={`GDPR`}
      description='Keeping Discord servers safer from scammers, spammers and all the malicious actors out there'>
      <main>
        <GDPR />
      </main>
    </Layout>
  );
}
