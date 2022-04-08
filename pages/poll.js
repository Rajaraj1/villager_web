import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Script from "next/script";

const poll = () => {
  return (
    <>
      <Head>
        <title>Villagepur | Poll</title>
      </Head>
      <Navbar />
      {/* <h1 className="text-center text-xl font-bold">poll</h1> */}
      <Image src="/poll.svg" width="1500px" height="500px" />
      <Footer />
    </>
  );
};

export default poll;
