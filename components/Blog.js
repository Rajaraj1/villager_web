import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";

const Blog = (props) => {
  return (
    <>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">
            {props.category}
          </span>
          <span className="mt-1 text-gray-500 text-sm">3 March 2022</span>
          {/* <Image src="/akshit.jpg" height={200 + "px"} width={100 + "px"} /> */}
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
            {props.heading}
          </h2>
          <p className="leading-relaxed">{props.content}</p>
          <Link href={props.refer}>
            <a className="text-indigo-500 inline-flex items-center mt-4">
              <span className="mr-1">Read More</span>
              <FaArrowCircleRight />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Blog;
