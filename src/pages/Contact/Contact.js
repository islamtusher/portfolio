import React, { useState, useRef } from 'react';
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
        <div id='contact'>
            <h1 className='mt-20 text-[40px] text-primary text-center font-bold'>CONTACT ME</h1>
            <h1 className='mb-12 text-[18px] text-gray-600 text-center '>LET'S ME KNOW, WHAT IS IN YOUR MIEND</h1>
            <div class="hero  lg:w-3/4 mx-auto ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left lg:pl-8">
                    <h1 class="text-5xl font-bold">Contact Me</h1>
                    <p class="py-6">
                        If any message for me or any enquiry Please fell free to contact me 
                    </p>
                </div>
                <div class="card flex-shrink-0 lg:w-2/3 shadow-2xl bg-base-100">
                    <div class="card-body px-6 py-16">
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col" >
                            <div className="flex flex-col lg:flex-row w-full gap-4">
                                <input type="email" placeholder="email" class="input input-bordered  w-full" {...register("user_email", { required: true})} />
                                <input type="text" placeholder="Name" class="input input-bordered w-full" {...register("user_name", { required: true})} />            
                            </div>
                            <textarea type="text" placeholder="Your Message" class="input input-bordered my-6 pb-16" {...register("message", { required: true})} />
                            <button type="submit" className='btn bg-primary'>Send </button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Contact;