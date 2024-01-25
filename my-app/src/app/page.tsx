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
    <Navbar/>
    <HeroSection/>
    <Intro/>
    <AboutApp/>
    <AppCarousel/>
    <ClientCarousel/>
    <Posts/>
    </>
  );
}
