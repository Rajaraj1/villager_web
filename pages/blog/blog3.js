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
          Role of Society in protecting children online
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
              Society has a great role in protecting children online. This
              protection might be related to many things. If the children are
              given the facility of the internet at a young age it might be
              unfruitful for the children’s future. Here, Society can play a
              very important role by educating the children about the use of the
              internet in a positive way and for good use. Society to a great
              extent is responsible for how the children perceive a thing and
              what they learn from society. If society is progressive and
              positive about the internet then the children will also be able to
              learn the good things from the internet. We should have an
              open-mindedness in society about the use of the internet for the
              children and open discussions should happen in the society for the
              proper discussion of the society.
            </p>

            <p className="py-6">
              Protection does not mean that children should not be allowed to
              use the internet or they can’t go online at all. Protection here
              means that society should think about how to avoid our children
              from getting indulged in wrong activities. The fear of society
              should not stop children to be online but this fear should become
              a responsibility for society and parents to keep a check on their
              children if they doing something wrong on the internet.
            </p>

            <ol>
              <li className="py-3">
                Children should be given any app or device like a mobile,
                tablet, etc. in a protected mode so that they can only see the
                information or the content related to them.Many apps and devices
                are specially designed for kids and many are providing control
                in the hands of parents so that they can allow their children to
                view only selected content for kids. Here we can see that the
                app companies are fulfilling their role in their responsibility
                as a part of this society. We can see the protected modes in-app
                like YouTUbe, Hotstar, etc. where age-relevant content is
                available for the kids.
              </li>
              <li className="py-3">
                Society should not have a taboo about the internet and fulfil
                their roles with good responsibility. We know that, on the
                internet, there is too much inappropriate content is available
                which can ruin the lives of children if they get indulged in
                that. Here, should ensure that this type of content should be
                removed from the internet. Here, comes the great role of the
                government as it is the democratic system and the government is
                part of this society so it should ban inappropriate content like
                porn and do something that becomes inaccessible to children.
                Government should penalize the doers of these types of things.
                We all are humans and we humans only are doing wrong for our
                kids and creating this inappropriate content. I suggest here
                that society should give good moral values and ethics to their
                children so that we can build a better society.
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
