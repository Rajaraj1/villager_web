import React from "react";
import Image from "next/image";
import { FaBlog, FaFacebook, FaGoogle } from "react-icons/fa";
const Carousel = (props) => {
  return (
    <>
      <div className="flex bg-white h-96 container mx-auto">
        <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
              {props.heading}
              {/* Welcome to <span className="text-indigo-600">Villagepur</span> */}
            </h2>
            <p className="mt-2 text-sm text-gray-500 md:text-base">
              {props.para}
              {/* We believe in the continuous growth of a person. We here provide
              some good content to read, quotes that will motivate you, polls
              where you can express your opinion and some learning content. */}
              <br />
              {/* Keep living life to the fullest. */}
            </p>
            <div className="flex justify-center lg:justify-start mt-6">
              {/* <button
                type="button"
                className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
              >
                <FaGoogle />
                <span className="mx-2">Sign in with Google</span>
              </button>
              <button
                type="button"
                className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
              >
                <FaFacebook />
                <span className="mx-2">Sign in with Facebook</span>
              </button> */}
              <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Blog
              </button>
              <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Quotes
              </button>
              <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Poll
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 clip-path">
          <div className="h-full object-cover" id={props.indexClass}>
            {/* backgroundImage */}
            <Image src={props.img} height={props.height} width={props.width} />
            <div className="h-full bg-black opacity-25"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
