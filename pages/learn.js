import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Video from "../components/Video";

const learn = () => {
  return (
    <>
      <Head>
        <title>Villagepur | Learn</title>
      </Head>
      <Navbar />
      <Carousel
        heading="Learn With Us"
        para="Learning is an important part of everyones life and it should be quality education. You can learn with us about the different fields of computer science. We are going to provide some good quality content that can enrich your knowledge."
        img="/learn.jpg"
        width="950px"
        height="500px"
      />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Video
          img="/thumbnail/Wel_to_CP.png"
          title="Welcome To CodePine"
          price="$1"
          rating="5/5"
          // vid="https://www.youtube.com/embed/ApZL5T5fQuA"
        />
        <Video
          img="/thumbnail/Install_VS_Code_Thumbnail.png"
          title="Vs Code Install"
          price="$1"
          rating="5/5"
          // vid="https://www.youtube.com/embed/eC0WWw8Chnw"
        />
        <Video
          img="/thumbnail/Vs_Code_for_Python.png"
          title="Vs Code For Python"
          price="$1"
          rating="5/5"
          // vid="https://www.youtube.com/embed/YkjPeFRTfGk"
        />
        <Video
          img="/thumbnail/VS_Code_For_Java.png"
          title="Vs Code For Java"
          price="$1"
          rating="5/5"
          // vid="https://www.youtube.com/embed/I84YeM5lHhM"
        />
        <Video
          img="/thumbnail/VS_Code_For_C++.png"
          title="Vs Code For C/C++"
          price="$1"
          rating="5/5"
          // vid="https://www.youtube.com/embed/UOYtHPrZheg"
        />
        <Video
          img="/thumbnail/VS_Code_Unsinstallation_Thumbnail_English.png"
          title="Vs Code Uninstall"
          price="$1"
          rating="5/5"
          // vid="https://www.youtube.com/embed/o5ZoQc3Zv4c"
        />
        <Video
          img="/thumbnail/R.png"
          title="R and R Studio Install"
          price="$1"
          rating="5/5"
          // vid="https://www.youtube.com/embed/FWDhVBkcTqo"
        />
        <Video
          img="/thumbnail/Pycharm.png"
          title="Pycharm Install"
          price="$1"
          rating="5/5"
          // vid="https://www.youtube.com/embed/irNss8-_ZLM"
        />
        <Video
          img="/thumbnail/Node_js.png"
          title="Node Js Install"
          price="$1"
          rating="5/5"
          // vid="https://www.youtube.com/embed/uJKUnkCB7Qg"
        />
      </section>
      <Footer />
    </>
  );
};

export default learn;
