import Image from "next/image";
import React from "react";

const Business = () => {
  const business = [
    {
      name: "Tech ",
      sub: "StartUps",
      desc: "Leveraging media branding, we empower startups to shine in tech, captivating audiences and forging lasting connections",
      img: "/tech.png",
    },
    {
      name: "Trading Platforms ",
      sub: "and Exchanges",
      desc: "Our tailored solutions empower startups to build strong brand identities in finance, fostering lasting connections and loyalty.",
      img: "/exchange.png",
    },
    {
      name: "Web3 ",
      sub: "Brands",
      desc: "Join us in shaping the future of branding, where creativity meets decentralization, and opportunities abound",
      img: "/web3.png",
    },
    {
      name: "Fintech ",
      sub: "Platforms",
      desc: "We specialize in transforming fintech startups' innovation into memorable brands that build trust, attract attention, and engage audiences effectively.",
      img: "/icon.png",
    },
  ];
  return (
    <div
      id="business"
      className="w-full py-1 px-1 md:py-6 md:px-24 flex flex-col justify-center items-center mt-[3rem]"
    >
      <div className="h-[8px] w-[120px] bg-[#ED9E1F] rounded-[8px]"></div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="md:font-[400] font-[600] md:text-[35px] text-[25px] md:w-full w-[50%] tracking-[.5px] text-center">
          Businesses We Work With
        </h2>
        <div className="grid md:grid-cols-4 grid-cols-1 justify-center items-center md:mt-[2rem] mt-[1rem] md:gap-[2rem] gap-[0.2rem]">
          {business.map((b, i) => (
            <div key={i} className="flex flex-col justify-start items-start gap-[1rem] py-[1rem] md:px-0 px-10">
              <Image src={b.img} alt="icon" width={30} height={30} />
              <div className="flex flex-col justify-start items-start gap-[.5rem]">
                <h3 className="text-[25px] font-[600]">{b.name} <br />
                    {b.sub}
                </h3>
                <span className=" opacity-80">{b.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Business;
