import Head from 'next/head';
import styles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Layout, {siteTitle} from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

export default function Home({allPostsData}) {
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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {
            allPostsData.map(({id, date, title}) => (
              <li className={utilStyles.listItem}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date}/>
                </small>
              </li>
            ))
          } 
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
