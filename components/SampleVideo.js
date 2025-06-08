
const SampleVideo = () => {
  return (
    <section className="text-center my-12">
      <h2 className="text-2xl font-semibold mb-4">See What Our AI Can Do</h2>
      <video controls className="mx-auto w-full max-w-3xl rounded shadow-lg">
        <source src="/sample-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default SampleVideo;
