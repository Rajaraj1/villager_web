import React from "react";
import Image from "next/image";
import Link from "next/link";
const Card = (props) => {
  return (
    <>
      <div className="flex justify-center max-w-sm mx-5 lg:mx-16 mb-2 rounded-lg shadow-xl transition duration-150 ease-in-out shadow-indigo-500/50 hover:translate-y-2">
        {/* <div className="hover:rounded-xl w-full  mx-auto  mt-10 hover:bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"> */}
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <Link href="#!">
            <a data-mdb-ripple="true" data-mdb-ripple-color="light">
              <Image
                className="rounded-t-lg"
                src={props.name}
                alt="smartphone.jpg"
                width={384 + "px"}
                height={256 + "px"}
              />
            </a>
          </Link>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {props.title}
            </h5>
            <p className="text-gray-700 text-base mb-4">{props.content}</p>
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              <Link href="{props.linker}">Read More...</Link>
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Card;
