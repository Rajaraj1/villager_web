import React from "react";

const Card_2 = () => {
  return (
    <>
      <div
        className=" ml-10 w-96 bg-white rounded-2xl p-6 text-white shadow-lg 
      shadow-purple-500/70 scale-95 hover:scale-100 transition duration-300 ease-in-out mt-4"
      >
        <img
          className="border-2 border-[#ffafbd] rounded-3xl mb-2"
          src="/learn.jpg"
          alt="learn.img"
        />
        <div className="text-black text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ex
          magnam culpa minima perferendis ipsum architecto autem quisquam
          voluptatibus hic itaque, magni expedita repellat facilis eum eos est
          quos pariatur.
        </div>
        <div className="text-white mt-2">
          <button
            //     className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-2
            //   "
            className="bg-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 font-medium text-sm px-5 py-2.5 text-center mb-2  shadow rounded-[40px] shadow-purple-500/60"
          >
            Click me
          </button>
        </div>
      </div>
    </>
  );
};

export default Card_2;
