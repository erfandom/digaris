import React from "react";
import App from 'next/app';
import Head from 'next/head';

import '../styles/globals.css'
import '../styles/tailwind.css'
import "@fortawesome/fontawesome-free/css/all.min.css";

export default class MyApp extends App  {
  render () {
    const { Component, pageProps } = this.props

  return (
  <React.Fragment> 
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>ISCHAIN - Islamic Cryptocurrency & Blockchain Community</title>
    </Head>
    <Component {...pageProps} />
  </React.Fragment>
    );
  }
}