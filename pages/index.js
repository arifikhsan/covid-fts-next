import Head from "next/head";
import React from 'react';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>COVID-19 Fuzzy Time Series Prediction</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">COVID-19 Fuzzy Time Series Prediction</h1>
        <p className="description">
          Daily update <a id="api" href="/api/daily">/api/daily</a>
        </p>
      </main>
    </div>
  );
}
