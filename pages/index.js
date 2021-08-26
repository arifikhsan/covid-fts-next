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
        <h1>COVID-19 Fuzzy Time Series Prediction</h1>
        <p>
          Daily update <a href="/api/daily">/api/daily</a>
        </p>
        <p>
          Last update <a href="/api/last-update">/api/last-update</a>
        </p>
      </main>
    </div>
  );
}
