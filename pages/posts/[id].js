import Layout from "../../components/layout";
import { getAllPostIds, getPostData  } from "../../lib/posts";

export default function Post() {
  return 
  <Layout>

  </Layout>
}


export async function getStaticPathc () {
  const paths = getPostData();

  return {
    paths,
    fallback: false
  }
}