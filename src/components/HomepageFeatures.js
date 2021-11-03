import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Anti-bot System',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        A unique and customizable system that allows you to filter out bot 
        user accounts, usually used to scam your members.
      </>
    ),
  },
  {
    title: 'Easy mass banning',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Provides an easy way to target a big number of users to ban based on 
        conditions provided by you.
      </>
    ),
  },
  {
    title: 'Network effect',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        By leveraging the power of inter-connected servers we are able to protect
        all servers as one protected community.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
