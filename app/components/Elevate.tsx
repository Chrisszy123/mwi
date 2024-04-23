import React from "react";

const Elevate = () => {
  return (
    <div className="w-full py-1 px-1 md:py-6 md:px-24 flex flex-col justify-center items-center md:mt-[3rem] mt-[2rem] px-4 md:px-0">
      <span className="md:w-[50%] w-full flex flex-col md:justify-center justify-start md:items-center items-start">
        <h2 className="font-[700] md:text-[48px] text-[35px] md:w-full w-[50%] md:text-center">
          {" "}
          <span className="text-[#ED9E1F]">Elevate </span>Your Brand
        </h2>
        <p className="w-[100%] tracking-[1px] md:text-center text-start">
          From broadcast media partnerships to robust media databases, tell the
          world your story with our suite of services.
        </p>
      </span>
    </div>
  );
};

export default Elevate;
