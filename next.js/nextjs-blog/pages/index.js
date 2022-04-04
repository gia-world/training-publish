import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";
import Input from "../components/Input";
import Parent from "../components/Parent";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const obj = {
    obj2: {
      obj3: {
        obj4: {
          name: "min",
          age: "32",
        },
      },
    },
  };
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        {/* Read{' '}
          {' '} adds an empty space, which is used to divide text over multiple lines.
            = &nbsp; ?
          */}
      </Head>
      <section className={utilStyles.headingMd}>
        <Parent obj={obj}>
          <Input type="password" />
          <Input type="text" />
        </Parent>

        <p>Hello~~~</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
