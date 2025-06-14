import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#4D55CC] rounded-2xl mx-4 p-8">
      {/* Footer Starts */}
      <div className="text-white grid grid-cols-1 md:grid-cols-5 gap-10 max-w-screen-xl mx-8 text-sm border-b border-gray-800 pb-8">
        
        {/* Column 1 */}
        <div className="space-y-3">
          <div className="font-bold text-lg text-blue-600">▶</div>
          <p className="font-semibold">
            Fliki - Best text-to-speech <br />
            and text-to-video software.
          </p>
          <div className="flex gap-2 text-orange-400 text-base">
            <span>🌍 4.8/5</span>
            <span>📡 4.8/5</span>
          </div>
          <p className="text-xs text-black">© 2025 Nine Thirty Five</p>
          <div className="flex flex-col gap-1">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">About</a>
            <a href="#">Media kit</a>
            <button className="border rounded px-2 py-1 text-xs w-fit">🌞 Light mode</button>
            <button className="border rounded px-2 py-1 text-xs w-fit">⚙ Cookie settings</button>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-3">Features</h3>
          <ul className="space-y-1">
            {[
              "Text to video", "AI voiceover", "Idea to video", "AI avatar", "Text to speech",
              "PPT to video", "Image to video", "Translator", "Thumbnail maker", "Screen recorder", "View all features →"
            ].map((item, idx) => (
              <li key={idx}><a href="#" className="hover:underline">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-3">Use-cases</h3>
          <ul className="space-y-1">
            {[
              "Content Creation", "Business and Corporate", "Training Videos", "Internal Communication",
              "Marketing and Social Media", "Education and E-Learning", "eCommerce", "Localization and Translation"
            ].map((item, idx) => (
              <li key={idx}><a href="#" className="hover:underline">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-1">
            {[
              "Guide", "Pricing", "Blog", "Tutorials", "Webinars", "FAQs", "What's new",
              "Voice samples", "Languages & dialects", "Alternatives", "Tools", "Affiliate program"
            ].map((item, idx) => (
              <li key={idx}><a href="#" className="hover:underline">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h3 className="font-semibold mb-3">Connect with us</h3>
          <ul className="space-y-1">
            {[
              "Email", "Twitter", "Facebook", "LinkedIn", "Instagram", "YouTube", "Community"
            ].map((item, idx) => (
              <li key={idx}><a href="#" className="hover:underline">{item}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
