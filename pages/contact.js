import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import Footer from "../components/Footer";

const contact = () => {
  return (
    <>
      <Head>
        <title>Villagepur | Contact</title>
      </Head>
      <div className="backgroundImageC">
        <Navbar />
        <Form />
      </div>
      <Footer />
    </>
  );
};

export default contact;
