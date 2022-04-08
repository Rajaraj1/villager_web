import React from "react";

const video = (props) => {
  return (
    <>
      <div className="wrapper antialiased text-gray-900 transition duration-150 ease-in-out scale-95 md:scale-95 lg:scale-95 md:hover:scale-100">
        <div>
          <img
            // src="https://source.unsplash.com/random/350x350"
            src={props.img}
            alt=" random image"
            className="w-[450px] object-cover object-center rounded-lg shadow-md shadow-indigo-500/50"
          />
          {/* <iframe
            width="545"
            height="315"
            src={props.vid}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-[450px] object-cover object-center rounded-lg shadow-md shadow-indigo-500/50"
            loading="lazy"
          ></iframe> */}

          <div className="relative px-4 -mt-2">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-baseline">
                <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  Latest
                </span>
                <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                  Akshit kumar
                </div>
              </div>

              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                {props.title}
              </h4>

              <div className="mt-1">
                {props.price}
                <span className="text-gray-600 text-sm mr-1">/yr</span>
                <span className="text-gray-600 text-sm">For Free</span>
              </div>
              <div className="mt-4">
                <span className="text-teal-600 text-md font-semibold">
                  {props.rating} ratings
                </span>
                <span className="text-sm text-gray-600">
                  (based on 200k ratings)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default video;
