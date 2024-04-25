import Image from 'next/image'
import React from 'react'

const Service = () => {
    const services = [
        {
            name: "Public Relations",
            desc: "Craft compelling narratives, manage crisis communications, and secure impactful media coverage across traditional and digital channels."
        },
        {
            name: "Marketing Communications",
            desc: "Connect with your audience through meticulously crafted messaging, strategic storytelling, and integrated marketing campaigns tailored to your brand's unique identity and objectives."},
        {
            name: "Influencer Marketing",
            desc: "Amplify your brand's reach and authenticity by collaborating with carefully selected influencers who resonate with your target audience, driving engagement and fostering genuine connections."
        },
        {
            name: "Display Advertising and Sponsorship",
            desc: "Maximize visibility and ROI through strategic placement of display ads and sponsorship opportunities across a variety of platforms, leveraging data-driven insights for optimal performance."
        },
        {
            name: "Email and Newsletter Marketing",
            desc: "Cultivate lasting relationships with your audience through personalized email campaigns, engaging newsletters, and drip sequences designed to nurture leads, drive conversions, and foster brand loyalty."
        }
    ]
  return (
    <div id='services' className="w-full py-1 px-1 md:py-6 md:px-24 flex flex-col justify-center items-center mt-[3rem]">
        <div className="h-[8px] w-[120px] bg-[#ED9E1F] rounded-[8px]"></div>
      <div className="flex flex-col justify-center items-center mb-[2rem] md:mt-[2rem] mt-[0]">
        <h2 className="md:font-[400] font-[500] md:text-[35px] text-[25px] tracking-[.5px] text-center">
            Elevate your brand with our solutions
        </h2> 
        </div>
    <div className='flex justify-center items-center gap-[1rem] md:w-[80%] w-full px-4 md:px-0'>
        {/* <div className='flex flex-col justify-start items-start gap-[1.5rem]'>
            <div className='text-[20px] py-[.5rem] px-[1rem] font-[400] text-[#ED9E1F] rounded-[2rem] tracking-[0.5px]' style={{border: "1px solid #ED9E1F"}}>Our Services</div>
            <h3 className='text-[30px] font-[600]'>Elevate your brand <br /> with our solutions</h3>
            <Image src="/service.png" alt="service" width={400} height={500}/>
        </div> */}
        <div className='flex flex-col gap-[1rem] justify-start items-start'>
            <div className='w-full h-[2px] bg-[#DDDADA]'></div>
            {services.map((service, i) => (
                <div key={i} className='pb-[.5rem]' style={{borderBottom: "2px solid #DDDADA"}}>
                    <h3 className='text-[#1C1C1C] font-[500] text-[24px]'>{service.name}</h3>
                    <span className='text-[14px] tracking-[.5px]'>{service.desc}</span>
                </div>
            ))}
        </div>
    </div>
    </div>
  )
}

export default Service