import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full py-1 px-1 md:py-6 md:px-24 flex flex-col justify-center items-center mt-[3rem] gap-[1rem]">
      <div className="h-[8px] w-[120px] bg-[#ED9E1F] rounded-[8px]"></div>
      <div className="flex flex-col justify-center items-center md:mb-[2rem] mb-0">
        <h2 className="font-[400] text-[35px] tracking-[.5px]">
            About Us
        </h2> 
        </div>
      <span className="w-[90%] flex flex-col gap-[1rem] justify-center items-center tracking-[1px] text-[16px]">
        <p>While the internet has been around for over 30 years it has gone through
        many iterations and evolved into what billions of people worldwide now
        know it as today.</p> 
        
        <p>With the continued evolution of the internet, Web3 and
        highly personalized user experiences are inevitable. Businesses relying
        solely on customers from single territories or employing traditional
        forms of digital marketing are no longer able to thrive the way they
        used to.</p> 
        
        <p>For businesses with innovative products to truly thrive in a
        Web3 world they must look beyond traditional borders and conventional
        forms of marketing to truly stand out and go viral. </p>
        
        <p>This is where Media
        World International comes in. With a combined 60 years experience in
        traditional marketing spaces and elite expertise in web3 marketing our
        network of publications, customer databases, influencer networks help
        brands fulfill their potential and transcend borders.</p>
      </span>
    </div>
  );
};

export default About;
