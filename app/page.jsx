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
      <Navbar color="#FCFCFC" mobileColor="#FCFCFC" imageUrl="/mwi-01.png" service="#services" business="#business" about="#about"/>
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
