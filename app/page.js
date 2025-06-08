import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SampleVideo from "@/components/SampleVideo";
import Steps from "@/components/Steps";
import FAQ from "@/components/FAQ";
import HeroSection from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <HeroSection />
      <SampleVideo />
      <Steps />
      <FAQ />
      <Footer />
    </div>
  );
}
