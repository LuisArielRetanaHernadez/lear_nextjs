import Layout from "../../components/layout";
import { getAllPostIds, getPostData  } from "../../lib/posts";

export default function Post({posData}) {
  return 
  <Layout>
    {posData.title}
    <br />
    {posData.id}
    <br />
    {posData.date}
  </Layout>
}


export async function getStaticPathc () {
  const paths = getPostData();

  return {
    paths,
    fallback: false
  }
}