import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Quote from "../components/Quote";
import Carousel from "../components/Carousel";

const about = () => {
  return (
    <>
      <Head>
        <title>Villagepur | Quotes</title>
      </Head>
      <Navbar />
      <Carousel
        heading="Welcome to Villagepur"
        para="We believe in the continuous growth of a person. We here provide
              some good content to read, quotes that will motivate you, polls
              where you can express your opinion and some learning content."
        // img="/home.jpg"
        img="/"
        height="595px"
        width="800px"
        indexClass="backgroundImage"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 scale-95">
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
        <Quote
          content="Life has got all those twists and turns. You’ve got to hold on tight and off you go."
          profile="/akshit.jpg"
          name="Nicole Kidman"
          info=""
        />
        <Quote
          content="Keep your face always toward the sunshine, and shadows will fall behind you."
          profile="/akshit.jpg"
          name="Walt Whitman"
          info=""
        />
        <Quote
          content="Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell."
          profile="/akshit.jpg"
          name="Amal Clooney"
          info=""
        />
        <Quote
          content="People tell you the world looks a certain way. Parents tell you how to think. Schools tell you how to think. TV. Religion. And then at a certain point, if you’re lucky, you realize you can make up your own mind. Nobody sets the rules but you. You can design your own life.                             "
          profile="/akshit.jpg"
          name="Duchess Meghan"
          info=""
        />
        <Quote
          content="I just want you to know that if you are out there and you are being really hard on yourself right now for something that has happened … it’s normal. That is what is going to happen to you in life. No one gets through unscathed. We are all going to have a few scratches on us. Please be kind to yourselves and stand up for yourself, please."
          profile="/akshit.jpg"
          name="Taylor Swift"
          info=""
        />
      </div>
      <Footer />
    </>
  );
};

export default about;
