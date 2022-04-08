import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { FaBars, FaHamburger } from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="text-black  body-font bg-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 font-medium text-sm px-5 py-2.5 text-center mb-2  shadow rounded-b-[40px] shadow-purple-500/60">
        <div className="container mx-auto flex flex-wrap p-0 flex-col md:flex-row items-center">
          <nav className=" hidden md:flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto ">
            <Link href="/">
              <a className="mr-5 ">Home</a>
            </Link>

            <Link href="/blog">
              <a className="mr-5 ">Blog</a>
            </Link>

            <Link href="/learn">
              <a className="mr-5 ">Learn</a>
            </Link>

            <Link href="/poll">
              <a className="mr-5 ">Poll</a>
            </Link>

            <Link href="/quotes">
              <a className="mr-5 ">Quotes</a>
            </Link>

            <Link href="/contact">
              <a className="mr-5 ">Contact</a>
            </Link>
          </nav>
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <span className="ml-3 text-xl">
              <Link href="/">
                <a>
                  <Image
                    src="/villagepur.svg"
                    width={100 + "px"}
                    height={28 + "px"}
                    alt="villagepur.svg"
                    className="animate-pulse"
                  />
                </a>
              </Link>
            </span>
          </a>
          <div className="hidden lg:w-2/5 md:inline-flex lg:justify-end ml-5 lg:ml-0">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Search Here
            </button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2.5 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? <FaBars /> : <FaHamburger />}
            </button>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href="/">
                  <a className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                    Home
                  </a>
                </Link>
                <Link href="/blog">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Blog
                  </a>
                </Link>
                <Link href="/learn">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Learn
                  </a>
                </Link>
                <Link href="/poll">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Poll
                  </a>
                </Link>
                <Link href="/quotes">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Quotes
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Contact
                  </a>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </header>
    </>
  );
};

export default Navbar;
