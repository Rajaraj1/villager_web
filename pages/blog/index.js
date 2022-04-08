import Head from "next/head";
import React from "react";
import Blog from "../../components/Blog";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
const blog = () => {
  return (
    <>
      <Head>
        <title>Villagepur | Blog</title>
      </Head>
      <Navbar />
      <Carousel
        heading="Read the Blogs"
        para="You can read the blogs on the latest topics and topics that are important to you. We are bringing to you some good articles on different topics daily. Read our blogs and give your valuable feedback as well."
        img="/blog.svg"
        height="500px"
        width="950px"
      />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-0 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <Blog
              category="Social Media"
              heading="“SOCIAL MEDIA Good or Bad?”"
              content="There is not any clearcut answer to this question. We can consider
              the good or the bad things about social media. In this article, we
              will be having a view on that."
              refer="/blog/blog1"
            />
            <Blog
              category="Robots will Reduce Human Employment"
              heading="A debate on Robots will reduce the Human Employment"
              content="Good Evening to Respected juries and my fellow participants,
              My name is Akshit Kumar
              Today I am going to share my viewpoint opposing the motion, Robots will reduce Human Employment.
              "
              refer="/blog/blog2"
            />
            <Blog
              category="Role of Society in protecting children online
              "
              heading="Why is Russia invading Ukraine and what does Putin want?"
              content="Society has a great role in protecting children online. This protection might be related to many things. If the children are given the facility of the internet at a young age it might be unfruitful for the children’s future. "
              refer="/blog/blog3"
            />
            <Blog
              category="RUSSIA VS UKRAIN"
              heading="Why have Russian troops attacked?"
              content="In a pre-dawn TV address on 24 February, President Putin declared Russia could not feel safe, develop and exist because of what he claimed was a constant threat from modern Ukraine."
              refer="/blog/blog1"
            />
            <Blog
              category="RUSSIA VS UKRAIN"
              heading="How far will Russia go?"
              content="It is now clear Russia is seeking to seize the big cities and overthrow Ukraine's democratically elected government. President Zelensky said he had been warned the enemy has designated me as target number one; my family is target number two."
              refer="/blog/blog1"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default blog;
