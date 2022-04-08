import React from "react";
import ReactAudioPlayer from "react-audio-player";
const Birthday = () => {
  return (
    <>
      <h2 className="text-center font-bold text-2xl italic text-purple-900 mt-8 border-4 border-purple-600 rounded-full p-2 shadow shadow-purple-500">
        Happy birthday ONOO 😍
      </h2>
      <div className="card shadow-lg rounded-2xl shadow-purple-500/100">
        <div className="back shadow-lg rounded-2xl shadow-purple-500/100"></div>
        <div className="front shadow-lg rounded-2xl shadow-purple-500/100">
          <div className="imgset shadow-lg rounded-2xl shadow-purple-500/100">
            <img
              className="shadow-lg rounded-2xl shadow-purple-500/100"
              width="100%"
              //   src="https://1.bp.blogspot.com/-Mgj9-rbs65E/XfMoPSD5gtI/AAAAAAAAURk/NBokE2gSS2cTSJ2em5lZ5hJDuTtRN7UVwCLcBGAsYHQ/s1600/2713997.png"
              src="/bb_1.jpeg"
            />
          </div>
        </div>
        <div className="text-container">
          <p id="head" className="text-purple-900 font-bold">
            Happy Birthday!
          </p>
          <h5 className="text-purple-900 font-bold text-xl italic">
            Anvay Singh
          </h5>
          <p className="text-purple-500">
            Happy birthday to my brother, we are so blessed and lucky to have
            you! Have Fun and a Good Health! Love you!
          </p>
          <p>Hope your day goes great!</p>
        </div>
      </div>
      <div className="flex justify-center w-44 m-auto">
        <ReactAudioPlayer
          className="m-4"
          src="/birthday.wav"
          autoPlay
          controls
        />
      </div>
    </>
  );
};

export default Birthday;
