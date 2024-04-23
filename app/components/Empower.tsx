import Image from "next/image";
import React from "react";

const Empower = () => {
  return (
    <div id="expand" className="w-full py-1 px-1 md:py-6 md:px-24 flex flex-col justify-center items-center gap-[4rem]">
      <span className="md:w-[60%] w-full flex flex-col md:justify-center justify-start md:items-center items-start px-4 md:px-0">
              <h2 className="font-[700] md:text-[48px] text-[30px] md:w-full w-[50%] md:text-center">
                {" "}
                <span className="text-[#ED9E1F]">Expand </span>Your Reach
              </h2>
              <p className="w-[100%] tracking-[1px]">
                Take your brand to the next level with our global network of
                publications. Benefit from customizable geographic targeting and
                premium site postings.
              </p>
            </span>
      <div className="flex flex-col md:flex-row md:justify-center justify-start md:items-center items-start md:gap-[4rem] gap-[1rem] md:w-[80%] w-full px-4 md:px-0">
        <div className="font-[700] text-[35px] relative">
            <Image className="absolute lg:top-[50px] xs:hidden top-[50px]" style={{ left: "-10px"}} src="/circle.png" width={200} height={250} alt="circle" />
          <span className="text-[#ED9E1F]">Empower</span> Your <br /> Message
        </div>
        <span className="md:w-[60%] w-full tracking-[1px]">
          Leverage our network and domain authority to grow your audience and
          launch into new territories with unique content discoverable on mobile
          devices and beyond.
        </span>
      </div>
    </div>
  );
};

export default Empower;
