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
      <div className=" footer   w-full  py-24 pb-12 max-sm:pb-6 relative overflow-hidden">
        <img src="/images/footer_bg.png" className='footer_bg_img  cover absolute inset-0' alt="img" />
        <div className=" footer_cont container">
          <div className="w-full h-140 bg-[#100E0D40] backdrop-blur-xs rounded-3xl flex flex-col justify-between p-6 md:p-10">
            <div className="w-full md:flex justify-between">
              <h2 className='text-white text-3xl md:text-6xl  leading-none md:leading-14 font-thin '>Created With <br />  <span className=' playfair-italic'>intention.</span></h2>
              <div className=" max-sm:mt-10 capitalize md:text-xl text-white ">
                <div className="leading-tight space-y-2">
                  <Link
                    href="/about"
                    className="block w-fit hover:underline underline-offset-4"
                  >
                    About
                  </Link>
                  <Link
                    href="/playground"
                    className="block w-fit hover:underline underline-offset-4"
                  >
                    Playground
                  </Link>
                  <div className="leading-tight space-y-2">
                    <Link
                      href="/contact"
                      className="block w-fit hover:underline underline-offset-4"
                    >
                      Contact
                    </Link>
                    <Link
                      href=""
                      className="block w-fit hover:underline underline-offset-4"
                    >
                      Resume
                    </Link>
                  </div>
                </div>


              </div>
            </div>
            <div className=" w-full h-fit space-y-24 md:space-y-0 md:items-center md:justify-between md:flex md:flex-row-reverse  font-semibold md:text-xl rounded-xl md:rounded-full md:px-8 p-5 text-choc bg-[#F9F7EC]">
              <div className="space-y-2">
                <div className="flex gap-x-2 items-center">
                  <img src="/icons/mail_choc.svg" alt="img" />
                  <p className='translate-y-0.5 hover:underline cursor-pointer'>
                    dikshaghanshani97@gmail.com
                  </p>
                </div>
              </div>
              <div className="capitalize md:flex md:items-center md:gap-x-2">
                <p className='text-base'>social media</p>
                <div className=" flex items-center gap-x-2">

                  <button className='size-12 border border-[#713F1E] hover:bg-[#713F1E] hover:text-[#E6DEC9]! transition-all duration-300 rounded-full center text-choc'>
                    <RiLinkedinLine size={22} />
                  </button>
                  <button className='size-12 border border-[#713F1E] hover:bg-[#713F1E] hover:text-[#E6DEC9]! transition-all duration-300 rounded-full center text-choc'>
                    <RiBehanceLine size={22} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-12 max-sm:mt-6 text-white md:flex items-center justify-between">
            <p>© {new Date().getFullYear()} Diksha Ghanshani. All rights reserved</p>
            <Link href={"https://www.zerrorstudios.com/"} target='_blank'>
              Developed By <span className='hover:underline'> Zerror Studios</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer