import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Script 
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => console.log("Loaded!")}
      />
      <h1>Firts Page</h1>
      <h2>
        <Link href="/">Bakc to home</Link>
      </h2>
    </>
  )
}
