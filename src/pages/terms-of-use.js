import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Terms from '../components/Terms';


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Terms of Use`}
      description="Keeping Discord servers safer from scammers, spammers and all the malicious actors out there">
      <main>
       <Terms />
      </main>
    </Layout>
  );
}
