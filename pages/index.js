import Head from "next/head";

const HeadTag = function () {
  return (
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

const Greeting = function () {
  return <h1> Hello world</h1>;
};

export default function Home() {
  return (
    <div>
      <HeadTag />
      <main>
        <Greeting />

        <Greeting />
        <Greeting />
      </main>
    </div>
  );
}
