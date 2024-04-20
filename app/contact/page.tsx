'use client'
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm("service_bubuelo", "template_7x9i0wq", form.current, {
        publicKey: "NWiOohJYAWI8N7KHX",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div>
      <Navbar color="#1C1C1C" contact mobileColor="#000"/>
      <div className="md:p-0 p-4">
      <div className="flex flex-col justify-between w-full py-1 px-1 md:py-6 md:px-24">
        <h2 className="text-[48px] font-[800]">Get in touch</h2>
        <h5 className="font-[400] tracking-[0.5px]">
          Reach out, and let's create a universe of possibilities together!
        </h5>
      </div>
      <div className="bg-[##EDEDED] grid md:grid-cols-2 grid-cols-1 gap-[2rem] justify-between md:w-[70%] w-full rounded-[10px] md:ml-24 ml-0 py-4 px-4 md:py-6 md:px-6 mt-[1rem] md:mt-0" style={{border: "1px solid #DCDBDB"}}>
        <div className="flex flex-col gap-[1rem]">
          <div>
            <h2 className="font-[600] text-[25px] md:text-[30px]">Talk to us today</h2>
            <h5 className="tracking-[0.5px]">Any question or remarks? Just write us a message!</h5>
          </div>
          <form className="flex flex-col gap-[1rem]" ref={form} onSubmit={sendEmail}>
            <div className="grid md:grid-cols-2 grid-col-1 items-center gap-[1rem]">
            <input className="p-[10px] rounded-lg" type="text" name="user_last_name" placeholder="Last Name"/>
            <input className="p-[10px] rounded-lg" type="text" name="user_first_name" placeholder="First Name"/>
            </div>
            <input className="p-[10px] rounded-lg" type="email" name="user_email" placeholder="Email"/>
            <input className="p-[10px] rounded-lg" type="number" name="user_phone" placeholder="Phone Number"/>
            <textarea className="h-[200px] p-[10px] rounded-lg" name="message" />
            <input className="bg-[#ED9E1F] p-[10px] rounded-[10px] cursor-pointer" type="submit" value="Send" />
          </form>
        </div>
        <div className="h-[100%] w-[100%] bg-[#000] rounded-lg"></div>
      </div>
      </div>
      <div className="block md:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
