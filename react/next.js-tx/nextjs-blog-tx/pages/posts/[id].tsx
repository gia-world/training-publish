import { GetStaticProps } from "next";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

type postDataType = {
  postData: {
    title: string;
    id: string;
    date: string;
    contentHtml: string;
  };
};

export default function Post({ postData }: postDataType) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as Params;
  const postData = await getPostData(id);
  console.log(context);
  return {
    props: {
      postData,
    },
  };
};
// export async function GetStaticProps({ params }){
//   const postData = getPostData(params.id);
//   return {
//     props: {
//       postData,
//     },
//   };
// }

export async function getStaticPaths() {
  const paths = getAllPostIds();
  console.log(`paths: `, paths);

  return {
    paths,
    fallback: false,
  };
}
