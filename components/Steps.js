
const Steps = () => {
  const steps = [
    "1. Enter a simple text prompt describing your video idea.",
    "2. Our AI generates the video script and visuals.",
    "3. Download or share your finished video instantly."
  ];

  return (
    <section className="my-16 px-4 max-w-3xl mx-auto text-center">
      <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
      <ul className="space-y-4 text-lg text-left">
        {steps.map((step, index) => (
          <li key={index} className="bg-white p-4 rounded shadow">{step}</li>
        ))}
      </ul>
    </section>
  );
};

export default Steps;
