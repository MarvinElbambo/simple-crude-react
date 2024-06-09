import Head from "next/head";
import HomePage from "@/components/pages/home-page/home-page";

export default function Home() {
  return (
    <>
      <Head>
        <title>Simple Crud React</title>
        <meta name="description" content="UTAK React developer test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
    </>
  );
}
