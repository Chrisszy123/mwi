'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Empower from "./components/Empower";
import Elevate from "./components/Elevate";
import { useEffect } from "react";
import Business from "./components/Business";
import Service from "./components/Service";
import About from "./components/About";
import Communication from "./components/Communication";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    // Smooth scroll to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);

        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []); 
  return (
    <main className="relative">
      <div className="absolute h-[100vh] w-[100vw]"style={{
          zIndex:"-10",
          backgroundImage: `url('/bg.png')`,
          backgroundSize: 'cover', // Optional: Adjust background size as needed
          backgroundPosition: 'center', // Optional: Adjust background position as needed
        }}></div>
      <Navbar color="#FCFCFC" mobileColor="#fff"/>
      <Jumbotron />
      
      <Empower />
      <Elevate />
      <Business />
      <Service />
      <About />
      <Communication />
      <Footer />
    </main>
  );
}
