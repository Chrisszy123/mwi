'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Navbar = ({color, contact, mobileColor}: any) => {
    const [active, setActive] = useState(!contact ? 'home' : 'contact')
    const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <nav className='relative flex justify-between w-full py-4 px-6 md:py-6 md:px-24'>
        <div>
            <Image className='cursor-pointer' src="/logoblack.png" alt='logo' width={150} height={150}/>
            {/* <h2 className='font-[900] text-[#ED9E1F] text-[20px]'>LOGO</h2> */}
            
        </div>
        <button className="block lg:hidden flex-col flex gap-[.3rem]" onClick={toggleNav}>
            <span className={`h-[3px] w-[25px] block`} style={{backgroundColor: mobileColor}}></span>
            <span className={`h-[3px] w-[25px] block`} style={{backgroundColor: mobileColor}}></span>
            <span className={`h-[3px] w-[25px] block`} style={{backgroundColor: mobileColor}}></span>
          </button>
          {showNav ? (
             <div className='items-center justify-center block lg:hidden absolute w-[80vw] bg-[#1c1c1c] h-[50vh] py-[2rem] rounded-[10px]' style={{zIndex: '111', top: "50px", right: '0'}} >
             <ul style={{color: color}} className='flex flex-col justify-between items-center gap-[2rem]'>
                 <li className='text-white' style={active === 'home' ? {borderBottom: "3px solid #ED9E1F"} : {}} onClick={() => setActive('home')}><a href="/" className='no-underline'>Home</a></li>
                 <li className='text-white' style={active === 'services' ? {borderBottom: "3px solid #ED9E1F"} : {}} onClick={() => setActive('services')}><a href="#services" className='no-underline'>Our Services</a></li>
                 <li className='text-white' style={active === 'business' ? {borderBottom: "3px solid #ED9E1F"} : {}} onClick={() => setActive('business')}><a href="#business" className='no-underline'>Business We Work With</a></li>
                 <li style={active === 'about' ? {borderBottom: "3px solid #ED9E1F"} : {}} onClick={() => setActive('about')}><a href="#about" className='no-underline'>About Us</a></li>
                 <li className='text-white' style={active === 'contact' ? {borderBottom: "3px solid #ED9E1F"} : {}} onClick={() => setActive('contact')}><Link href="/contact" className='no-underline'>Contact Us</Link></li>
             </ul>
         </div>
          ): null}
        <div className='items-center justify-center hidden lg:flex' >
            <ul style={{color: color}} className='flex justify-between items-center gap-[2rem]'>
                <li style={active === 'home' ? {borderBottom: "3px solid #ED9E1F"} : {}} onClick={() => setActive('home')}><a href="/" className='no-underline'>Home</a></li>
                <li style={active === 'services' ? {borderBottom: "3px solid #ED9E1F"} : {}} onClick={() => setActive('services')}><a href="#services" className='no-underline'>Our Services</a></li>
                <li style={active === 'business' ? {borderBottom: "3px solid #ED9E1F"} : {}} onClick={() => setActive('business')}><a href="#business" className='no-underline'>Business We Work With</a></li>
                <li style={active === 'about' ? {borderBottom: "3px solid #ED9E1F"} : {}} onClick={() => setActive('about')}><a href="#about" className='no-underline'>About Us</a></li>
                <li style={active === 'contact' ? {borderBottom: "3px solid #ED9E1F"} : {}} onClick={() => setActive('contact')}><Link href="/contact" className='no-underline'>Contact Us</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar