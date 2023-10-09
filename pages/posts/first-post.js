import Head from "next/head";
import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>Firts Page</h1>
      <h2>
        <Link href="/">Bakc to home</Link>
      </h2>
    </>
  )
}
