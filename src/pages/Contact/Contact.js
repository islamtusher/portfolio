import React, { useState, useRef } from 'react';
import './Contact.css';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
const Contact = () => {
    const { register, handleSubmit, reset,getValues, formState: { errors } } = useForm(); 
    const form = useRef();
    // Handle Login Form
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ened8ke', 'template_61bo0hc', form.current, '84pwxDUnYcuH_WyGZ')
        .then((result) => {
            console.log(result.text);
            console.log('send successed');
            e.target.reset()
            toast('Message sending Success')
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <div id='contact' className=' py-20 px-8 bg-[#111] '>
            <div className="lg:max-w-[65%] mx-auto">
                <h1 className='mb-10 text-2xl text-primary text-center '>Let's Work Together</h1>
                <div class="hero ">
                    <div class="hero-content flex-col lg:items-start text-white lg:flex-row-reverse">
                        <div class="flex flex-col gap-4 text-center lg:w-2/5 lg:text-left lg:pl-8">
                            <h1 class="text-2xl font-bold font-[Oswald]">My Contacts</h1>
                            <div className="">
                                <p class="subtitle ">
                                    If any message for me or any enquiry Please fell free to contact me 
                                </p>
                            </div>
                            <div className="">
                                <h1 className='font-bold text-lg'>Email</h1>
                                <p className='subtitle font-thin text-[14px]'>tusher26997@gmail.com</p>
                            </div>
                            <div className="">
                                <h1 className='font-bold text-lg'>Phone</h1>
                                <p className='subtitle font-thin text-[14px]'>tusher26997@gmail.com</p>
                            </div>
                            <div className="">
                                <h1 className='font-bold text-lg'>Address</h1>
                                <address className='subtitle font-thin text-[14px]'>Gulshan, Dhaka <br/> Bangladesh</address>
                            </div>
                        </div>
                        <div class="card flex-shrink-0 gap-5 rounded-none w-full lg:w-3/5 text-center lg:text-left">
                            <h1 className='text-white text-2xl font-bold font-[Oswald]'>Quick Contct Form</h1>
                            <div class="card-body p-0">
                                <form ref={form} onSubmit={sendEmail} className="flex flex-col" >
                                    <div className="flex flex-col lg:flex-row w-full gap-4">
                                        <input type="email" placeholder="Your Email" class="input border-0 border-b border-gray-600 focus:border-primary rounded-none text-white  bg-transparent focus:bg-transparent w-full px-0" {...register("user_email", { required: true})} />
                                        <input type="text" placeholder="Your Name" class="input border-0 border-b border-gray-600 focus:border-primary rounded-none  text-white bg-transparent w-full px-0" {...register("user_name", { required: true})} />            
                                    </div>
                                    <textarea type="text" placeholder="Your Massage" class="input border-0 border-b border-gray-600 focus:border-primary rounded-none text-white  bg-transparent my-6 py-2 px-0 h-[120px]" {...register("message", { required: true})} />
                                    <button type="submit" className='common-btn w-[150px] mx-auto lg:mx-0'>submit </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Contact;