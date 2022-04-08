import React from "react";

const Quote = (props) => {
  return (
    <>
      <div className="w-full p-4">
        <div className="p-8 rounded-2xl shadow-xl shadow-indigo-500/40 transition duration-150 ease-in-out scale-90 hover:scale-100">
          <span className="text-6xl">❝</span>
          <p className="text-2xl leading-relaxed">{props.content}</p>
          <hr className="my-4" />
          <div className="flex flex-wrap items-center">
            <img
              className="w-12 h-12 rounded-full"
              alt="Use any sample image here..."
              src={props.profile}
            />
            <p className="mx-2 text-gray-500 text-sm">
              {props.name}
              <br />
              {props.info}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
