'use client'

import { RiBehanceLine, RiLinkedinLine } from '@remixicon/react'
import { Link } from 'next-view-transitions'
import React, { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormData((current) => ({
            ...current,
            [name]: value,
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch('/api/contact-submission', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const result = await response.json()

            if (!response.ok) {
                throw new Error(result.message || 'Something went wrong.')
            }

            // Reset form
            setFormData({
                fullName: '',
                phone: '',
                email: '',
                message: '',
            })

            toast.success('Thank you. Your message has been sent.')

        } catch (error) {
            toast.error(
                error.message || 'Could not submit the form right now.'
            )
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} />

            <div className=" ctct_form opacity-0 w-full container mt-12 md:mt-24 p-5 md:p-10">
                <div className=" w-full grid-cols-1 md:grid-cols-3 grid bg-[#713F1E] rounded-2xl p-5 md:p-10">
                    <div className=" w-full col-span-1 pr-0 md:pr-12">
                        <div className=" w-full h-fit space-y-24  font-semibold md:text-xl rounded-xl p-5 text-choc bg-[#FFFFFF]">
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
                            <div className=" ">
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
                    <form onSubmit={handleSubmit} className=" max-sm:mt-10 col-span-2 md:border-l border-white/10 md:pl-12 space-y-10 text-white">
                        <div className="">
                            <div className=" flex items-center gap-x-2">
                                <img src="/icons/user.svg" alt="img" />
                                <p className='translate-y-1 font-semibold '>Full Name</p>
                            </div>
                            <input type="text" placeholder='Enter name' className=' text-xl font-semibold pt-4 pb-1 border-b border-white/10 w-full outline-none' name="fullName" value={formData.fullName} onChange={handleChange} required />
                        </div>
                        <div className="">
                            <div className=" flex items-center gap-x-2">
                                <img src="/icons/dialer.svg" alt="img" />
                                <p className='translate-y-1 font-semibold '>Contact Number</p>
                            </div>
                            <input type="tel" placeholder='+91 123456789' className=' text-xl font-semibold pt-4 pb-1 border-b border-white/10 w-full outline-none' name="phone" value={formData.phone} onChange={handleChange} />
                        </div>
                        <div className="">
                            <div className=" flex items-center gap-x-2">
                                <img src="/icons/mail.svg" alt="img" />
                                <p className='translate-y-1 font-semibold '>Email Address</p>
                            </div>
                            <input type="email" placeholder='Enter email' className=' text-xl font-semibold pt-4 pb-1 border-b border-white/10 w-full outline-none' name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="">
                            <div className=" flex items-center gap-x-2">
                                <img src="/icons/message.svg" alt="img" />
                                <p className='translate-y-1 font-semibold '>Your Message</p>
                            </div>
                            <textarea placeholder='A Brief About Your Project...' rows={5} className=' text-xl resize-none  font-semibold pt-4 pb-1 border-b border-white/10 w-full outline-none' name="message" value={formData.message} onChange={handleChange} required />
                        </div>
                        <button type="submit" disabled={isSubmitting} className='bg-[#FFFFFF] text-choc font-semibold text-sm uppercase hover:bg-transparent! border border-transparent hover:text-[#FFFFFF]! hover:border-[#FFFFFF] px-6 py-3 pb-1.5 rounded-lg transition-all duration-300 w-fit block disabled:pointer-events-none disabled:opacity-60'>
                            <p>{isSubmitting ? 'Submitting...' : 'Submit'}</p>
                        </button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default ContactForm
