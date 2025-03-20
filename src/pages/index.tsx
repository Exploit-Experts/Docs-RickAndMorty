import type {ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from '../css/index.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Episódios',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Reviva as aventuras mais insanas e descubra os segredos escondidos em cada episódio de Rick and Morty. Wubba Lubba Dub-Dub!
      </>
    ),
  },
  {
    title: 'Personagens',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Conheça os personagens mais bizarros e hilários do multiverso. De Morty a Mr. Meeseeks, todos estão aqui esperando por você!
      </>
    ),
  },
  {
    title: 'Localizações',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Explore dimensões malucas e planetas estranhos. Cuidado com os portais, você nunca sabe onde pode acabar!
      </>
    ),
  },
];

const FamousQuotes = [
  {
    quote: "Wubba Lubba Dub-Dub!",
    character: "Rick Sanchez"
  },
  {
    quote: "Nobody exists on purpose. Nobody belongs anywhere. Everybody's gonna die. Come watch TV?",
    character: "Morty Smith"
  },
  {
    quote: "I'm a pickle, Morty! I'm Pickle Riiiick!",
    character: "Rick Sanchez"
  },
  {
    quote: "Sometimes science is more art than science. A lot of people don't get that.",
    character: "Rick Sanchez"
  },
  {
    quote: "I'm not a villain. I'm a high-functioning sociopath.",
    character: "Rick Sanchez"
  }
];

const SeriesStats = [
  { number: "6+", label: "Temporadas" },
  { number: "61+", label: "Episódios" },
  { number: "826+", label: "Personagens" },
  { number: "126+", label: "Localizações" },
  { number: "800M", label: "Visualizações" }
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function QuoteItem({quote, character}) {
  return (
    <div className={styles.quoteCard}>
      <blockquote>"{quote}"</blockquote>
      <cite>— {character}</cite>
    </div>
  );
}

function StatItem({number, label}) {
  return (
    <div className={styles.statItem}>
      <div className={styles.statNumber}>{number}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Rick and Morty's
        </Heading>
        <span className={styles.database}>Database</span>
        <p className={styles.heroSubtitle}>
          O guia definitivo para o universo mais caótico da televisão!
        </p>
        <div className={styles.buttonGroup}>
          <a className={styles.buttonGreen} href="#features">
            Explorar
          </a>
          <a className={styles.buttonBlue} href="docs/category/documentação">
            Ver Docs
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Rick and Morty Database">  
      <HomepageHeader />
      <main>
        <section className={styles.features} id="features">
          <div className="container">
            <div className={styles.sectionTitle}>
              <Heading as="h2">Explore o Multiverso</Heading>
              <p>Tudo que você precisa saber sobre Rick and Morty em um só lugar</p>
            </div>
            <div className="row">
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
        
        <section className={styles.quotesSection}>
          <div className="container">
            <div className={styles.sectionTitle}>
              <Heading as="h2">Citações Icônicas</Heading>
              <p>As frases mais memoráveis da série</p>
            </div>
            <div className={styles.quotesGrid}>
              {FamousQuotes.map((quote, idx) => (
                <QuoteItem key={idx} {...quote} />
              ))}
            </div>
          </div>
        </section>
        
        <section className={styles.statsSection}>
          <div className="container">
            <div className={styles.sectionTitle}>
              <Heading as="h2">Rick and Morty em Números</Heading>
              <p>Estatísticas impressionantes da série</p>
            </div>
            <div className={styles.statsGrid}>
              {SeriesStats.map((stat, idx) => (
                <StatItem key={idx} {...stat} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
