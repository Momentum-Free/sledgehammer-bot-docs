import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://invite.sledgehammer.app">
            Invite me 🤖
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout>
      <head>
        <meta property="og:title" content="Sledgehammer Discord Bot" />
        <meta property="og:description" content="Keeping Discord servers safer from scammers, spammers and all the malicious actors out there." />
        <meta property="og:site_name" content="Sledgehammer Discord Bot" />
        <meta property='og:image' content='/img/SledgehammerLogo.png' />
      </head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
