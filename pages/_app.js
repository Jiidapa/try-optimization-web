import React from "react";
import Head from 'next/head'
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Optimize Web</title>
        <link rel="icon" href="/static/performance.png" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
    </React.Fragment>
  );
}
