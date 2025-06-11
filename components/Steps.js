"use client";
import Image from "next/image";
import step1Image from "../public/steps/step1.png";
import step2Image from "../public/steps/step2.png";
import step3Image from "../public/steps/step3.png";
// import step4Image from "../public/steps/step4.png";

const steps = [
  {
    id: 1,
    title: "Input your text",
    description:
      "Start by entering your text, ideas, blog articles, or any textual script.",
    image: step1Image,
  },
  // {
  //   id: 2,
  //   title: "Personalize your AI voice",
  //   description:
  //     "Choose from over 2,000 human-like AI voices in 80+ languages with Fliki's text to video generator and bring your videos to life.",
  //   image: step2Image,
  // },
  {
    id: 2,
    title: "Generate AI visuals",
    description:
      "Explore our library boasting millions of premium assets, or let the AI video generator from text intuitively select the perfect media to elevate your script.",
    image: step2Image,
  },
  {
    id: 3,
    title: "Review and export videos",
    description:
      "After refining your text video to perfection, take a final look with our preview feature. Once you're satisfied with the outcome, export and surprise your social media audience with captivating content!",
    image: step3Image,
  },
];

const Steps = () => {
  return (
    <section className="bg-white py-16 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#4D55CC] mb-12">
        How to convert text to video in 4 steps
      </h2>

      {/* Step 1 */}

      <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Step 1 */}
        <div className="bg-[#F5F7FA] rounded-xl shadow-md p-6">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="flex-1">
              <span className="inline-block text-xs font-semibold bg-gray-200 text-gray-700 px-3 py-1 rounded-full mb-2">
                STEP 1
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Input your text
              </h3>
              <p className="text-gray-700 text-base">
                Start by entering your text, ideas, blog articles, or any
                textual script.
              </p>
            </div>
            <div className="flex-1 w-full max-w-md">
              <Image
                src={step1Image}
                alt="Step 1"
                className="rounded-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-[#F5F7FA] rounded-xl shadow-md p-6">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="flex-1 w-full max-w-md">
              <Image
                src={step2Image}
                alt="Step 2"
                className="rounded-2xl w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <span className="inline-block text-xs font-semibold bg-gray-200 text-gray-700 px-3 py-1 rounded-full mb-2">
                STEP 2
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Generate AI visuals
              </h3>
              <p className="text-gray-700 text-base">
                Explore our library boasting millions of premium assets, or let
                the AI video generator from text intuitively select the perfect
                media to elevate your script.
              </p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-[#F5F7FA] rounded-xl shadow-md p-6">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="flex-1">
              <span className="inline-block text-xs font-semibold bg-gray-200 text-gray-700 px-3 py-1 rounded-full mb-2">
                STEP 3
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Review and export videos
              </h3>
              <p className="text-gray-700 text-base">
                After refining your text video to perfection, take a final look
                with our preview feature. Once you're satisfied with the
                outcome, export and surprise your social media audience with
                captivating content!
              </p>
            </div>
            <div className="flex-1 w-full max-w-md">
              <Image
                src={step3Image}
                alt="Step 3"
                className="rounded-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <button className="bg-[#4D55CC] hover:bg-[#3c43a5] text-white px-6 py-3 rounded-full font-semibold shadow transition">
          Add Fliki to your workflow →
        </button>
      </div>
    </section>
  );
};

export default Steps;
