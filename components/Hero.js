import React from "react";

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto h-screen px-6 py-16 text-center justify-center flex flex-col items-center">
      <h1 className="text-5xl max-w-2xl mx-auto font-bold mb-4">
        Best AI video generator for educators
      </h1>
      <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
        Our AI video generator transforms your text prompts into videos in
        seconds. It will automatically generate video clips, script, voiceover,
        subtitles, effects and music.
      </p>
      <div className="bg-white p-8 rounded-md shadow-xl shadow-gray-400 inline-block">
        <p className="mb-2 font-lg text-left">
          What would you like to create?
        </p>
        <textarea
          className="w-full p-2 border border-gray-300 rounded resize-none"
          placeholder="Eg: Motivating video on the benefits of eating healthy diet and exercising"
        ></textarea>
        <button className="mt-4 bg-[var(--primary-color)] text-white px-6 py-2 rounded">
          ✨ Create video
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
