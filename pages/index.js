import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout, {siteTitle} from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Home Page</title>
      </Head>
      <section className={styles.headingMd}>
        <p>
          This is a small introduction to NextJs for testing.
          I have already tested ReactJs with Redux, Redux-Toolkit, Router-Dom, Tailwind.
          But it's time to test ReactJs with NextJs.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
