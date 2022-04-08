import React from "react";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const blog1 = () => {
  return (
    <>
      <Navbar />
      {/* <!--Title--> */}
      <div className="text-center pt-16 md:pt-32">
        <p className="text-sm md:text-base text-green-500 font-bold">
          18 March 2022 <span className="text-gray-900">/</span> GETTING STARTED
        </p>
        <h1 className="font-bold break-normal text-3xl md:text-5xl">
          Robots will Reduce Human Employment
        </h1>
      </div>

      {/* <!--image--> */}
      <div
        className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded"
        style={{
          backgroundImage: `url(
            "https://source.unsplash.com/collection/1118905/"
          )`,
          // backgroundImage: `url("/learn.svg")`,
          height: 75 + "vh",
        }}
      ></div>

      {/* <!--Container--> */}
      <div className="container max-w-5xl mx-auto -mt-32">
        <div className="mx-0 sm:mx-6">
          <div
            className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal"
            style={{ fontFamily: "Georgia serif" }}
          >
            {/* <!--Post Content--> */}

            {/* <!--Lead Para--> */}
            <p className="text-2xl md:text-3xl mb-5 text-center">
              👋 Welcome Guys
              <a
                className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500 mx-2"
                href="https://www.youtube.com/channel/UCR3Py_Ko1w8Y8tK8rg5wwqA"
              >
                Akshit Here
              </a>
            </p>

            <p className="py-6">
              Good Evening to Respected juries and my fellow participants, My
              name is Akshit Kumar Today I am going to share my viewpoint
              opposing the motion, Robots will reduce Human Employment.
            </p>

            <p className="py-6">
              Starting off by saying a famous line change is the only constant.
              So, what I mean is that every then and now the world is changing
              rapidly. Robot advancement is a part of that. Robots are designed
              for performing a specific activity so that the activity can be
              done accurately, fast, and to reduce human dependency and human
              errors.
            </p>

            <ol>
              <li className="py-3">
                Now, coming to the jobs of the humans, we mainly have two types
                of jobs, one is skilled and the other is unskilled. As per my
                research and intellect, robots are just going to change the
                types of jobs. The expansion of robots is going to create
                numerous amount of skilled jobs. To support my theory I will
                provide you with a scenario, we have seen many revolutions like
                the industrial, Agri revolutions which revolutionized the whole
                world increased the productivity and quality of the work, and in
                the same way the automation revolution. The jobs in developing
                robots, automated machines, and AI and technology will increase
                rapidly. 10-15 years back we never thought about earning money
                sitting at home by doing things like gaming, content creation,
                being an influencer but all these things are happening. A few
                months back GitHub launched a product named GitHub copilot which
                autocompletes the code or kinda gives suggestions to the
                programmer. A ruckus was created suddenly but now everything is
                normal as people are now able to understand that it is not going
                to take your job as the human brain is behind it and we have
                only developed it.
              </li>
              <li className="py-3">
                If the robots are going to be developed then we can have
                employment in the development of robots, providing services, and
                research and innovation. Robots are managed by humans, so there
                will be a lot of jobs in robots management. In the manufacturing
                and designing of the robots, we will be having a lot of
                employment opportunities. We have an area of concern and that is
                to make humans skilled and adaptive to new things.
              </li>
              <li className="py-3">
                In the end, I just want to say that we should focus on skill
                development rather than worrying about the loss or reduction in
                the jobs of humans. I strongly believe that robots, AI, and
                automation are the future and it is better for us as soon as we
                accept this fact.
              </li>
            </ol>

            <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
              Thank You Akshit Kumar rests his words here…
            </blockquote>

            {/* <p className="py-6">Example code block:</p>
            <pre className="bg-gray-900 rounded text-white font-mono text-base p-4">
              <code className="break-words whitespace-pre-wrap">
                &lt;header className="site-header outer"&gt; &lt;div
                className="inner"&gt; &gt; "site-nav" &lt;/div&gt;
                &lt;/header&gt;
              </code>
            </pre> */}

            {/* <!--/ Post Content--> */}
          </div>

          {/* <!--Subscribe--> */}
          <div className="container font-sans bg-green-100 rounded mt-8 p-4 md:p-24 text-center">
            <h2 className="font-bold break-normal text-2xl md:text-4xl">
              Subscribe to Villagepur.com
            </h2>
            <h3 className="font-bold break-normal text-gray-600 text-base md:text-xl">
              Get the latest posts delivered right to your inbox
            </h3>
            <div className="w-full text-center pt-4">
              <form action="#">
                <div className="max-w-sm mx-auto p-1 pr-0 flex flex-wrap items-center">
                  <input
                    type="email"
                    placeholder="youremail@example.com"
                    className="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* <!-- /Subscribe--> */}

          {/* <!--Author--> */}
          <div className="flex w-full items-center font-sans p-8 md:p-24">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="http://i.pravatar.cc/300"
              alt="Avatar of Author"
            />
            <div className="flex-1">
              <p className="text-base font-bold md:text-xl leading-none">
                Akshit kumar
              </p>
              <p className="text-gray-600 text-xs md:text-base">
                Follow me on Social Media handles
                <a
                  className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
                  href="https://www.tailwindtoolbox.com"
                ></a>
              </p>
            </div>
            <div className="justify-end flex space-x-2">
              <span>
                <BsFacebook />
              </span>
              <span>
                <BsInstagram />
              </span>
              <span>
                <BsYoutube />
              </span>
            </div>
          </div>
          {/* <!--/Author--> */}
        </div>
      </div>

      <div className="bg-gray-200">
        <div className="container w-full max-w-6xl mx-auto px-2 py-8">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/3 px-2 pb-12">
              <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
                <a href="#" className="no-underline hover:no-underline">
                  <img
                    src="https://source.unsplash.com/_AjqGGafofE/400x200"
                    className="h-48 w-full rounded-t shadow-lg"
                  />
                  <div className="p-6 h-auto md:h-48">
                    <p className="text-gray-600 text-xs md:text-sm">
                      GETTING STARTED
                    </p>
                    <div className="font-bold text-xl text-gray-900">
                      Lorem ipsum dolor sit amet.
                    </div>
                    <p className="text-gray-800 font-serif text-base mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam at ipsum eu nunc commodo posuere et sit amet
                      ligula.
                    </p>
                  </div>
                  <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                    <img
                      className="w-8 h-8 rounded-full mr-4"
                      src="http://i.pravatar.cc/300"
                      alt="Avatar of Author"
                    />
                    <p className="text-gray-600 text-xs md:text-sm">
                      2 MIN READ
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-2 pb-12">
              <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
                <a href="#" className="no-underline hover:no-underline">
                  <img
                    src="https://source.unsplash.com/_AjqGGafofE/400x200"
                    className="h-48 w-full rounded-t shadow"
                  />
                  <div className="p-6 h-auto md:h-48">
                    <p className="text-gray-600 text-xs md:text-sm">
                      UNDERWATER
                    </p>
                    <div className="font-bold text-xl text-gray-900">
                      Biolumini algae diatomeae ecology.
                    </div>
                    <p className="text-gray-800 font-serif text-base mb-5">
                      Lorem ipsum dolor sit. Aliquam at ipsum eu nunc commodo
                      posuere et sit amet ligula.
                    </p>
                  </div>
                  <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                    <img
                      className="w-8 h-8 rounded-full mr-4"
                      src="http://i.pravatar.cc/300"
                      alt="Avatar of Author"
                    />
                    <p className="text-gray-600 text-xs md:text-sm">
                      4 MIN READ
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-2 pb-12">
              <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
                <a href="#" className="no-underline hover:no-underline">
                  <img
                    src="https://source.unsplash.com/DEa8_vxKlEo/400x200"
                    className="h-48 w-full rounded-t shadow"
                  />
                  <div className="p-6 h-auto md:h-48">
                    <p className="text-gray-600 text-xs md:text-sm">FOREST</p>
                    <div className="font-bold text-xl text-gray-900">
                      What is life but a teardrop in the eye of infinity?
                    </div>
                    <p className="text-gray-800 font-serif text-base mb-5">
                      Mollis pretium integer eros et dui orci, lectus nec elit
                      sagittis neque. Dignissim ac nullam semper aliquet
                      volutpat, ut scelerisque.
                    </p>
                  </div>
                  <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                    <img
                      className="w-8 h-8 rounded-full mr-4"
                      src="http://i.pravatar.cc/300"
                      alt="Avatar of Author"
                    />
                    <p className="text-gray-600 text-xs md:text-sm">
                      7 MIN READ
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default blog1;
