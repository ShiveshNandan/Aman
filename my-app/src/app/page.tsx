import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Intro from "./components/Intro";
import AboutApp from "./components/AboutApp";
import AppCarousel from "./components/AppCarousel";
import ClientCarousel from "./components/ClientCarousel";
import Posts from "./components/Posts";

export default function Home() {
  return (
    <>
    <div className="flex bg-blue-600 sticky top-0 z-10">
    <Navbar/>
    </div>
    <div className="flex bg-blue-600">
    <HeroSection/>
    </div>
    <div className="flex h-[100vh]">
    <Intro/>
    </div>
    <div className="flex h-[100vh]">
    <AboutApp/>
    </div>
    <div className="flex h-[120vh] my-auto">
    <AppCarousel/>
    </div>
    <div className="flex bg-blue-600 h-[90vh]">
    <ClientCarousel/>
    </div>
    <div className="flex h-[90vh]">
    <Posts/>
    </div>
    </>
  );
}
