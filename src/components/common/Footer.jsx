"use client";
import React from 'react'
import { useGSAP } from '@gsap/react'
import { RiBehanceLine, RiLinkedinLine, RiMailFill, RiMailLine } from '@remixicon/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Footer = () => {

  return (
    <>
      <div className=" footer   w-full  py-24 relative overflow-hidden">
        <img src="/images/footer_bg.png" className='footer_bg_img  cover absolute inset-0' alt="" />
        <div className=" footer_cont container">
          <div className="w-full h-140 bg-[#100E0D40] backdrop-blur-xs rounded-3xl flex flex-col justify-between p-10">
            <div className="w-full flex justify-between">
              <h2 className='text-white text-6xl leading-14 font-thin '>Created With <br />  <span className=' playfair-italic'>intention.</span></h2>
              <div className="grid capitalize text-xl text-white grid-cols-3">
                <div className="space-y-2">
                  <p>explore</p>
                  <p>Contact</p>
                </div>
                <div className="space-y-2">
                  <p>work</p>
                  <p>About</p>
                  <p>Resume</p>
                </div>
                <div className="space-y-2">
                  <p>Privacy & Policy</p>
                  <p>Terms and Conditions</p>
                  <p>FAQ</p>
                </div>
              </div>
            </div>
            <div className="w-[80%] mx-auto flex items-center justify-between bg-[#E6DEC9] p-4 px-8 rounded-full">
              <div className=" flex items-center gap-x-2">
                <p className=' text-choc font-semibold text-xl translate-y-0.5'>Follow:</p>

                <button className='size-10 border border-[#713F1E] hover:bg-[#713F1E] hover:text-[#E6DEC9]! transition-all duration-300 rounded-full center text-choc'>
                  <RiLinkedinLine size={18} />
                </button>
                <button className='size-10 border border-[#713F1E] hover:bg-[#713F1E] hover:text-[#E6DEC9]! transition-all duration-300 rounded-full center text-choc'>
                  <RiBehanceLine size={18} />
                </button>
              </div>
              <div className="text-choc">
                <div className="flex items-center gap-x-2 text-xl font-semibold">
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