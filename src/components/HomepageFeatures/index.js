import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Your decentralized numbers',
    Svg: require('@site/static/img/dto.svg').default,
    description: (
      <>
        Own your numbers, for calling and storing profile data and use in multiple services.
      </>
    ),
  },
  {
    title: 'Decentralized operators',
    Svg: require('@site/static/img/operators.svg').default,
    description: (
      <>
        Get your prefix to provide a wide range of services including intraverse
        communication, direct inwallet calls. Offer decentralized numbers for sale 
        within your prefix range.
      </>
    ),
  },
  {
    title: 'Powered by Ethereum',
    Svg: require('@site/static/img/ethereum.svg').default,
    description: (
      <>
        Distributed, open and extensible numbering system based on Ethereum
        blockchain and using ERC-721 standard.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
