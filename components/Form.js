import React from "react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

const Form = () => {
  return (
    <>
      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        {/* <!--Main Col--> */}
        <div
          id="profile"
          className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-80 mx-6 lg:mx-0"
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            {/* <!-- Image for mobile view--> */}
            <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center backgroundImageCo"></div>

            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none block w-full p-2.5 my-4 text-lg"
              placeholder="Name"
            />
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none block w-full p-2.5 my-4 text-lg"
              placeholder="Email"
            />
            <textarea
              className="
                text-lg
                form-control
                block
                w-full
                px-3
                py-1.5
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                my-4
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Your message"
            ></textarea>
            <div className="pt-12 pb-8">
              <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                Get In Touch
              </button>
            </div>

            <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
              <a
                className="link"
                href="#"
                data-tippy-content="@facebook_handle"
              >
                <span className="h- fill-current text-gray-600 hover:text-green-700">
                  <BsFacebook />
                  <title>Facebook</title>
                </span>
              </a>
              <a className="link" href="#" data-tippy-content="@twitter_handle">
                <span className="h- fill-current text-gray-600 hover:text-green-700">
                  <BsTwitter />
                  <title>Twitter</title>
                </span>
              </a>
              <a className="link" href="#" data-tippy-content="@github_handle">
                <span className="h- fill-current text-gray-600 hover:text-green-700">
                  <BsGithub />
                  <title>Github</title>
                </span>
              </a>

              <a
                className="link"
                href="#"
                data-tippy-content="@instagram_handle"
              >
                <span className="h- fill-current text-gray-600 hover:text-green-700">
                  <BsInstagram />
                  <title>Instagram</title>
                </span>
              </a>
              <a className="link" href="#" data-tippy-content="@youtube_handle">
                <span className="h- fill-current text-gray-600 hover:text-green-700">
                  <BsYoutube />
                  <title>YouTube</title>
                </span>
              </a>
            </div>

            {/* <!-- Use https://simpleicons.org/ to find the svg for your preferred product -->  */}
          </div>
        </div>

        {/* <!--Img Col--> */}
        <div className="w-full lg:w-2/5">
          {/* <!-- Big profile image for side bar (desktop) --> */}
          <img
            // src="https://source.unsplash.com/MP0IUfwrn0A"
            src="https://images.unsplash.com/photo-1620162209894-ea4c81960735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            // src="/contact_man.jpg"
            className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
          />
          {/* <!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A --> */}
        </div>
      </div>

      {/* <section className="text-gray-600 body-font relative py-4">
        <div
          className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap w-3/4
    shadow-2xl rounded-3xl border-4 border-emerald-900 bg-white"
        >
          <div className="lg:w-full md:w-full bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 lg:px-24">
            <h2 className="text-gray-900 mb-1 font-semibold text-3xl title-font text-center">
              Text Us
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
            Fill this form Carefully
          </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
              Send
            </button>
            <p className="text-xs text-gray-500 mt-3"></p>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Form;
