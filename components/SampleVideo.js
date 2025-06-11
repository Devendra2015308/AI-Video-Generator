
const SampleVideo = () => {
  return (
    <section className="py-12 px-4 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          <span className="text-[#4D55CC]">See What</span> Our AI Can Do
        </h2>

        <p className="text-gray-600 text-base sm:text-lg mb-8">
          Watch a quick sample generated from text using our powerful AI video
          engine.
        </p>

        <div className="relative w-full rounded-2xl overflow-hidden shadow-xl aspect-video max-w-4xl mx-auto">
          <video
            controls
            className="w-full h-full object-cover"
            poster="/video-thumbnail.jpg" 
          >
            <source src="/sample-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default SampleVideo;
