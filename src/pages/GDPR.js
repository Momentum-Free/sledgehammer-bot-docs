import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import GDPR from '../components/GDPR';


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`GDPR`}
      description="Keeping Discord servers safer from scammers, spammers and all the malicious actors out there">
      <main>
       <GDPR />
      </main>
    </Layout>
  );
}
