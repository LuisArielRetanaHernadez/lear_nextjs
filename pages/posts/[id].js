import Layout from "../../components/layout";

export default function Post() {
  return 
  <Layout>

  </Layout>
}


export async function getStaticPathc () {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false
  }
}