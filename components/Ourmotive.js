import React from "react";
import { MdStars } from "react-icons/md";
import { GiHoodedFigure } from "react-icons/gi";
import { CgSmileMouthOpen } from "react-icons/cg";
import { AiOutlineArrowRight } from "react-icons/ai";

const Ourmotive = () => {
  return (
    <>
      <section className="text-gray-600 body-font -mt-20">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"></h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              OUR MOTIVES
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    {/* <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg> */}
                    <MdStars />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Quality Content
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Our First Priority is to provide Good Content to User Show
                    that they can Improve Their Skills With US.
                  </p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">
                    Learn More
                    {/* <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg> */}
                    <span className="ml-1">
                      <AiOutlineArrowRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    {/* <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg> */}
                    <GiHoodedFigure />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Public Figure
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Our Second Priority is the to Taught basic Soft-Skills So
                    that You can Improve your Image in Socity.
                  </p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">
                    Learn More
                    {/* <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg> */}
                    <span className="ml-1">
                      <AiOutlineArrowRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    {/* <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg> */}
                    <CgSmileMouthOpen />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Be the Hero you cant Find
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Your Shadow is all of the things positive and negative that
                    youve denied about yourself and hidden beneath the surface
                    of the mask you forgot that youre wearing.
                  </p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">
                    Learn More
                    {/* <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg> */}
                    <span className="ml-1">
                      <AiOutlineArrowRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ourmotive;
