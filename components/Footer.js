import React from "react";
import Image from "next/image";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className=" p-1.5 bg-gradient-to-r from-amber-300 to-green-300 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 shadow-2xl rounded-t-[30px] md:flex md:items-center md:justify-between md:p-1.5 shadow-blue-800">
        <div className="container px-5 py-1.5 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src="/favicon.ico"
              width={40 + "px"}
              height={40 + "px"}
              className="w-10 h-10 text-white p-2 bg-white shadow-2xl rounded-full"
              alt="favicon.ico"
            />
            <span className="ml-3 text-lg text-white">Villagepur</span>
          </a>
          <p className="text-lg text-white   sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            Copyright &copy; 2022 Villagepur.com
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              className="text-white w-5 h-5"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook />
            </a>
            <a
              className="ml-3 text-white w-5 h-5"
              href="https://www.instagram.com/akshitvillager/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram />
            </a>
            <a
              className="ml-3 text-white w-5 h-5"
              href="https://www.youtube.com/channel/UCR3Py_Ko1w8Y8tK8rg5wwqA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsYoutube />
            </a>
            <a
              className="ml-3 text-white w-5 h-5"
              href="https://github.com/akshitvillager"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
            </a>
            <a
              className="ml-3 text-white w-5 h-5"
              href="https://twitter.com/akshitvillager"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitter />
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
