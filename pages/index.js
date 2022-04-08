import Head from "next/head";
import React from "react";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Testimonial from "../components/Testimonial";
import Video from "../components/Video";
import Ourmotive from "../components/Ourmotive";
import Quote from "../components/Quote";
import Link from "next/link";
import Card_2 from "../components/Card_2";
import Birthday from "../components/Birthday";

const index = () => {
  return (
    <>
      <Head>
        <title>Villagepur | Home</title>
        <meta
          name="google-site-verification"
          content="5P3r_-9DRMSS2coMO412nNDmsXRWk3W4zECVmpBexvY"
        />
      </Head>
      <Navbar />
      <Carousel
        heading="Welcome to Villagepur"
        para="We believe in the continuous growth of a person. We here provide
              some good content to read, quotes that will motivate you, polls
              where you can express your opinion and some learning content."
        img="/home.jpg"
        height="595px"
        width="800px"
        // indexClass="backgroundImage"
      />
      <h2 className="text-3xl font-medium title-font text-gray-900 my-10 text-center">
        <Link href="/blog">
          <span className="decoration-4 w-full cursor-pointer">
            OUR LATEST BLOG
          </span>
        </Link>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 my-4">
        <Card
          name="/smartphone.jpg"
          title="“SOCIAL MEDIA Good or Bad?”"
          content="There is not any clearcut answer to this question. We can consider
              the good or the bad things about social media. In this article, we
              will be having a view on that.Social media has its pros and cons as other things have. It In the past 10 years."
          linker=""
        />
        <Card
          name="/hello.svg"
          title="Robots will Reduce Human Employment"
          content="  Good Evening to Respected juries and my fellow participants, My
              name is Akshit Kumar Today I am going to share my viewpoint
              opposing the motion, Robots will reduce Human Employment."
          link="/blog/blog2"
        />
        <Card
          name="/team.svg"
          title=" Role of Society in protecting children online"
          content="Society has a great role in protecting children online. This
          protection might be related to many things. If the children are
          given the facility of the internet at a young age it might be
          unfruitful for the children’s future."
          link="/blog/blog3"
        />
      </div>
      {/* <h2 className="text-3xl font-medium title-font text-gray-900 my-10 text-center">
        <Link href="/quotes">
          <span className="decoration-4 w-full cursor-pointer">
            LATEST QUOTES
          </span>
        </Link>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 scale-100">
        <Quote
          content="Weaknesses are just strengths in the wrong environment."
          profile="/akshit.jpg"
          name="Marianne Cantwell"
          info=""
        />
        <Quote
          content="Nothing is impossible. The word itself says ‘I’m possible!"
          profile="/rajaraj.jpeg"
          name="Audrey Hepburn"
          info=""
        />
        <Quote
          content="There is nothing impossible to they who will try."
          profile="/akshit.jpg"
          name="Alexander the Great"
          info=""
        />
        <Quote
          content="The bad news is time flies. The good news is you’re the pilot."
          profile="/akshit.jpg"
          name="Michael Altshuler"
          info=""
        />
      </div>
      <Link href="learn">
        <h1 className="text-center font-medium text-3xl mt-8 cursor-pointer">
          LEARN WITH US
        </h1>
      </Link>
      <section className="grid grid-cols-1 md:grid-cols-3">
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
      </section> */}
      {/* <div className="grid  md:grid-cols-2 lg:grid-cols-3">
        <Card_2 />
        <Card_2 />
        <Card_2 />
        <Card_2 />
        <Card_2 />
        <Card_2 />
      </div> */}
      <Testimonial />
      <Ourmotive />
      <Footer />
    </>
  );
};

export default index;
