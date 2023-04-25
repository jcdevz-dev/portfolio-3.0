import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>John Carlo Devera | Frontend Developer</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="description" content="John Carlo Devera | Frontend Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="John Carlo Devera | Frontend Developer" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://deverajc.com/" />
        <meta property="og:image" content="https://deverajc.com/screenshot.jpg" />
        <meta property="og:description" content="Description Here" />
      </Head>
      <Home />
    </>
  );
}
