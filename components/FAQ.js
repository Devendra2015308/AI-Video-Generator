
const FAQ = () => {
  const faqs = [
    {
      question: "Do I need any editing skills?",
      answer: "No, our platform is designed for everyone. Just type your prompt."
    },
    {
      question: "Can I download the generated video?",
      answer: "Yes, videos can be downloaded or shared instantly."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, you can start creating videos for free without a credit card."
    }
  ];

  return (
    <section className="my-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-8">FAQs</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded shadow">
            <h3 className="font-semibold text-lg">{faq.question}</h3>
            <p className="text-gray-700 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
