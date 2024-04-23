"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";

function Jumbotron() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation(prevRotation => prevRotation + 1); // Increment rotation angle by 1 degree
    }, 10); // Adjust the interval time as needed

    return () => clearInterval(intervalId); 
  },[])
  return (
    <div id="home" className="relative w-full h-[100vh] py-1 px-1 md:py-2 md:px-24 flex flex-col justify-center items-center">
       <div className="absolute md:h-[110vh] h-[100vh] w-[100vw]"style={{
          zIndex:"-10",
          top: "-78px",
          backgroundImage: `url('/bg.png')`,
          backgroundSize: 'cover', // Optional: Adjust background size as needed
          backgroundPosition: 'center', // Optional: Adjust background position as needed
        }}></div>
      <div className="flex flex-col md:w-[70%] w-[100%] h-[100%] justify-center items-center">
        <h1 className="font-[900] md:text-[86px] text-[45px] text-center uppercase w-full text-[#FCFCFC]">
          Unleash Your Brand's Potential
        </h1>
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center self-end">
            {/* <span className="w-[60%] flex flex-col justify-center items-center">
              <h2 className="font-[700] text-[48px] text-center text-[#FCFCFC]">
                {" "}
                <span className="text-[#ED9E1F]">Expand </span>Your Reach
              </h2>
              <p className="w-[100%] tracking-[1px] text-[#FCFCFC]">
                Take your brand to the next level with our global network of
                publications. Benefit from customizable geographic targeting and
                premium site postings.
              </p>
            </span> */}
            <Image src="/mwi.png" alt="mwi" width={200} height={200} style={{ transform: `rotate(${rotation}deg)` }}/>
            <a href="#expand"><button className="text-white px-[3rem] py-[.5rem] flex gap-[1rem] justify-center items-center rounded-[4px] mb-[1rem]" style={{border: '1px solid #ED9E1F'}}>ENTER <FaArrowDown /> </button></a>
          </div>
          
        </div>
       
      </div>
    </div>
  );
}

export default Jumbotron;
