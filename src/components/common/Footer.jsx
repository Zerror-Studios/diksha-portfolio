"use client";
import React from 'react'
import { useGSAP } from '@gsap/react'
import { RiBehanceLine, RiLinkedinLine, RiMailFill, RiMailLine } from '@remixicon/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { Link } from 'next-view-transitions';
gsap.registerPlugin(ScrollTrigger)

const Footer = () => {

  return (
    <>
      <div className=" footer   w-full  py-24 relative overflow-hidden">
        <img src="/images/footer_bg.png" className='footer_bg_img  cover absolute inset-0' alt="" />
        <div className=" footer_cont container">
          <div className="w-full h-140 bg-[#100E0D40] backdrop-blur-xs rounded-3xl flex flex-col justify-between p-8 md:p-10">
            <div className="w-full md:flex justify-between">
              <h2 className='text-white text-3xl md:text-6xl  leading-none md:leading-14 font-thin '>Created With <br />  <span className=' playfair-italic'>intention.</span></h2>
              <div className=" max-sm:mt-10 grid capitalize md:text-xl text-white grid-cols-3">
                <div className="leading-tight space-y-2">
                  <Link
                    href="/explore"
                    className="block w-fit hover:underline underline-offset-4"
                  >
                    Explore
                  </Link>
                  <Link
                    href="/contact"
                    className="block w-fit hover:underline underline-offset-4"
                  >
                    Contact
                  </Link>
                </div>

                <div className="leading-tight space-y-2">
                  <Link
                    href="/work"
                    className="block w-fit hover:underline underline-offset-4"
                  >
                    Work
                  </Link>
                  <Link
                    href="/about"
                    className="block w-fit hover:underline underline-offset-4"
                  >
                    About
                  </Link>
                  <Link
                    href="/resume"
                    className="block w-fit hover:underline underline-offset-4"
                  >
                    Resume
                  </Link>
                </div>

                <div className="leading-tight space-y-2">
                  <Link
                    href="/privacy-policy"
                    className="block w-fit hover:underline underline-offset-4"
                  >
                    Privacy & Policy
                  </Link>
                  <Link
                    href="/terms-and-conditions"
                    className="block w-fit hover:underline underline-offset-4"
                  >
                    Terms and Conditions
                  </Link>
                  <Link
                    href="/faq"
                    className="block w-fit hover:underline underline-offset-4"
                  >
                    FAQ
                  </Link>
                </div>
              </div>
            </div>
            <div className=" w-full md:w-[80%] mx-auto md:flex items-center justify-between bg-[#E6DEC9] p-4 px-8 rounded-xl md:rounded-full">
              <div className=" flex items-center gap-x-2">
                <p className=' text-choc font-semibold text-xl translate-y-0.5'>Follow:</p>

                <button className='size-10 border border-[#713F1E] hover:bg-[#713F1E] hover:text-[#E6DEC9]! transition-all duration-300 rounded-full center text-choc'>
                  <RiLinkedinLine size={18} />
                </button>
                <button className='size-10 border border-[#713F1E] hover:bg-[#713F1E] hover:text-[#E6DEC9]! transition-all duration-300 rounded-full center text-choc'>
                  <RiBehanceLine size={18} />
                </button>
              </div>
              <div className=" max-sm:mt-12 text-choc">
                <div className="flex items-center gap-x-2 md:text-xl font-semibold">
                  <RiMailFill />
                  <p className='translate-y-0.5 hover:underline cursor-pointer'>
                    dikshaghanshani97@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer