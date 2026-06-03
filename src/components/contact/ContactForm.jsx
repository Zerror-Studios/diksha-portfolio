import { RiBehanceLine, RiLinkedinLine, RiMailFill, RiPhoneFill } from '@remixicon/react'
import React from 'react'

const ContactForm = () => {
    return (
        <>
            <div className="w-full container mt-24 p-10">
                <div className="grid-cols-3 grid bg-[#713F1E] rounded-2xl p-10">
                    <div className="col-span-1 pr-12">
                    <div className=" h-fit space-y-24  font-semibold text-xl rounded-xl p-5 text-choc bg-[#F9F7EC]">
                        <div className="space-y-2">

                            <div className="flex gap-x-2 items-center">
                                <RiPhoneFill />
                                <p>(123) 456 7890</p>
                            </div>
                            <div className="flex gap-x-2 items-center">
                                <RiMailFill />
                                <p className='translate-y-0.5 hover:underline cursor-pointer'>
                                    dikshaghanshani97@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="capitalize">
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
                    <div className="col-span-2 border-l border-white/10 pl-12 space-y-10 text-white">
                        <div className="">
                            <div className=" flex items-center gap-x-2">
                                <img src="/icons/user.svg" alt="" />
                                <p className='translate-y-1 font-semibold '>Full Name</p>
                            </div>
                            <input type="text" placeholder='Enter name' className=' text-xl font-semibold pt-4 pb-1 border-b border-white/10 w-full outline-none' name="" id="" />
                        </div>
                        <div className="">
                            <div className=" flex items-center gap-x-2">
                                <img src="/icons/dialer.svg" alt="" />
                                <p className='translate-y-1 font-semibold '>Contact Number</p>
                            </div>
                            <input type="number" placeholder='+91 123456789' className=' text-xl font-semibold pt-4 pb-1 border-b border-white/10 w-full outline-none' name="" id="" />
                        </div>
                        <div className="">
                            <div className=" flex items-center gap-x-2">
                                <img src="/icons/mail.svg" alt="" />
                                <p className='translate-y-1 font-semibold '>Email Address</p>
                            </div>
                            <input type="text" placeholder='Enter email' className=' text-xl font-semibold pt-4 pb-1 border-b border-white/10 w-full outline-none' name="" id="" />
                        </div>
                        <div className="">
                            <div className=" flex items-center gap-x-2">
                                <img src="/icons/message.svg" alt="" />
                                <p className='translate-y-1 font-semibold '>Your Message</p>
                            </div>
                            <textarea type="text" placeholder='A Brief About Your Project...' rows={5} className=' text-xl resize-none  font-semibold pt-4 pb-1 border-b border-white/10 w-full outline-none' name="" id="" />
                        </div>
                        <button className='px-6 py-3 pb-2 bg-[#F9F7EC] font-semibold text-choc rounded-xl'> Submit Message •</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ContactForm