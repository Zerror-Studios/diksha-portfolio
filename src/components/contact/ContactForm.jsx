import { RiBehanceLine, RiLinkedinLine, RiMailFill, RiPhoneFill } from '@remixicon/react'
import { Link } from 'next-view-transitions'
import React from 'react'

const ContactForm = () => {
    return (
        <>
            <div className=" ctct_form opacity-0 w-full container mt-12 md:mt-24 p-5 md:p-10">
                <div className=" w-full grid-cols-1 md:grid-cols-3 grid bg-[#713F1E] rounded-2xl p-5 md:p-10">
                    <div className=" w-full col-span-1 pr-0 md:pr-12">
                        <div className=" w-full h-fit space-y-24  font-semibold md:text-xl rounded-xl p-5 text-choc bg-[#F9F7EC]">
                            <div className="space-y-2">
                                <div className="flex gap-x-2 items-center">
                                    <img src="/icons/mail_choc.svg" alt="img" />
                                    <p className='translate-y-0.5 hover:underline cursor-pointer'>
                                        dikshaghanshani97@gmail.com
                                    </p>
                                </div>
                            </div>
                            <div className="capitalize">
                                <p className='text-base'>social media</p>
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
                    <div className=" max-sm:mt-10 col-span-2 md:border-l border-white/10 md:pl-12 space-y-10 text-white">
                        <div className="">
                            <div className=" flex items-center gap-x-2">
                                <img src="/icons/user.svg" alt="img" />
                                <p className='translate-y-1 font-semibold '>Full Name</p>
                            </div>
                            <input type="text" placeholder='Enter name' className=' text-xl font-semibold pt-4 pb-1 border-b border-white/10 w-full outline-none' name="" id="" />
                        </div>
                        <div className="">
                            <div className=" flex items-center gap-x-2">
                                <img src="/icons/dialer.svg" alt="img" />
                                <p className='translate-y-1 font-semibold '>Contact Number</p>
                            </div>
                            <input type="number" placeholder='+91 123456789' className=' text-xl font-semibold pt-4 pb-1 border-b border-white/10 w-full outline-none' name="" id="" />
                        </div>
                        <div className="">
                            <div className=" flex items-center gap-x-2">
                                <img src="/icons/mail.svg" alt="img" />
                                <p className='translate-y-1 font-semibold '>Email Address</p>
                            </div>
                            <input type="text" placeholder='Enter email' className=' text-xl font-semibold pt-4 pb-1 border-b border-white/10 w-full outline-none' name="" id="" />
                        </div>
                        <div className="">
                            <div className=" flex items-center gap-x-2">
                                <img src="/icons/message.svg" alt="img" />
                                <p className='translate-y-1 font-semibold '>Your Message</p>
                            </div>
                            <textarea type="text" placeholder='A Brief About Your Project...' rows={5} className=' text-xl resize-none  font-semibold pt-4 pb-1 border-b border-white/10 w-full outline-none' name="" id="" />
                        </div>
                                                <button className='bg-[#F9F7EC] text-choc font-semibold text-sm uppercase hover:bg-transparent! border border-transparent hover:text-[#F9F7EC]! hover:border-[#F9F7EC] px-6 py-3 pb-1.5 rounded-lg transition-all duration-300 w-fit block'>
                                                    <p>Submit</p>
                                                </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ContactForm