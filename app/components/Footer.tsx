import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="relative w-full py-1 px-1 md:py-6 md:px-24 flex flex-col justify-center items-center mt-[3rem] gap-[2rem] mb-[2rem]">
        <div className="absolute h-[100px] w-[100vw]"style={{
          zIndex:"-10",
          top: "0",
          backgroundImage: `url('/Shape.png')`,
          backgroundSize: 'cover', // Optional: Adjust background size as needed
          backgroundPosition: 'center', // Optional: Adjust background position as needed
        }}></div>
        <div className='flex md:flex-row flex-col justify-between md:items-center items-start md:gap-0 gap-[1rem] w-[90%]'>
        <Image src="/logo.png" alt='logo' width={150} height={150}/>
            <div className='flex md:flex-row flex-col justify-between md:items-center items-start gap-[2rem] text-[16px]'>
                <Link href="#">About us</Link>
                <Link href="#">Services</Link>
                <Link href="/contact">Contact us</Link>
            </div>
        </div>
        <div className='w-full h-[2px] bg-[#6C7E93] opacity-[.2]'></div>
        <div className='flex md:flex-row flex-col justify-between md:items-center items-start md:w-[90%] w-full gap-[1rem] md:gap-0 md:px-0 px-4'>
            <h2 className=''>© 2019 Lift Media. All rights reserved.</h2>
            <div className='flex justify-between items-center gap-[2rem] text-[16px]'>
                <Link href="#">Terms of Service  </Link>
                <Link href="#"> Privacy Policy</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer