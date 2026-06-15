"use client";
import React from 'react'
import { RiBehanceLine, RiLinkedinLine } from '@remixicon/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
gsap.registerPlugin(ScrollTrigger)

const footerLinks = [
  {
    label: "about",
    href: "/about"
  },
  {
    label: "playground",
    href: "/playground"
  },
  {
    label: "contact",
    href: "/contact"
  },
  {
    label: "resume",
    href: ""
  },
]

const Footer = () => {

  const pathname = usePathname()

  return (
    <>
      <div className=" footer   w-full  py-24 pb-12 max-sm:pb-6 relative overflow-hidden">
        <img src="/images/footer_bg.png" className='footer_bg_img  cover absolute inset-0' alt="img" />
        <div className=" footer_cont container">
          <div className="w-full h-140 bg-[#100E0D40] backdrop-blur-xs rounded-3xl flex flex-col justify-between p-6 md:p-10">
            <div className="w-full md:flex justify-between">
              <h2 className='text-white text-3xl   md:text-6xl  leading-none font-thin '>Created with <br />  intention.</h2>
              <div className=" max-sm:mt-10   md:text-xl text-white ">
                <div className="leading-tight capitalize space-y-2">
                  {footerLinks.map((item, i) => {
                    const isActive = item.path === pathname

                    return (
                      <Link
                        key={i}
                        href={item.href}
                        className="block group w-fit  relative"
                      >
                        <span
                          className={`
                        navLinkBar
                      bg-white
              absolute left-0 bottom-1 h-[1.5px] rounded-full w-full
              transition-transform duration-300 ease-out
              ${isActive ? "scale-x-100 origin-left" : "scale-x-0 origin-left group-hover:scale-x-100"}
            `}
                        ></span>
                        {item.label}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className=" w-full h-fit space-y-24 md:space-y-0 md:items-center md:justify-between md:flex md:flex-row-reverse  font-semibold md:text-xl rounded-xl md:rounded-full md:px-8 p-5 text-choc bg-[#F9F7EC]">
              <div className="space-y-2">
                <div className="flex gap-x-2 items-center">
                  <img src="/icons/mail_choc.svg" alt="img" />
                  <Link target='_blank'
                    href="mailto:dikshaghanshani97@gmail.com"
                    className="translate-y-0.5 hover:underline cursor-pointer"
                  >
                    dikshaghanshani97@gmail.com
                  </Link>
                </div>
              </div>
              <div className="  md:flex md:items-center md:gap-x-2">
                <p className='text-base capitalize md:translate-y-0.75'>social media</p>
                <div className=" flex items-center gap-x-2">

                  <Link href={"https://www.linkedin.com/in/dikshaghanshani/"} target='_blank' className='size-12 border border-[#713F1E] hover:bg-[#713F1E] hover:text-[#E6DEC9]! transition-all duration-300 rounded-full center text-choc'>
                    <RiLinkedinLine size={22} />
                  </Link>
                  <Link href={"https://www.behance.net/dikshaghan7cec"} target='_blank' className='size-12 border border-[#713F1E] hover:bg-[#713F1E] hover:text-[#E6DEC9]! transition-all duration-300 rounded-full center text-choc'>
                    <RiBehanceLine size={22} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-12 text-center max-sm:mt-6 text-white ">
            <p>© {new Date().getFullYear()} Diksha Ghanshani. All rights reserved</p>
          </div>
        </div>
      </div >
    </>
  )
}

export default Footer