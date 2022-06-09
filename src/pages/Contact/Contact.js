import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, handleSubmit, reset,getValues, formState: { errors } } = useForm(); 

    // Handle Login Form
    const onSubmit = data => {

    }
    return (
        <div id='contact'>
            <h1>Contact</h1>
            <div class="hero min-h-screen lg:w-3/4 mx-auto ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left lg:pl-8">
                    <h1 class="text-5xl font-bold">Contact Me</h1>
                    <p class="py-6">
                        If any message for me or any enquiry Please fell free to contact me 
                    </p>
                </div>
                <div class="card flex-shrink-0 lg:w-2/3 shadow-2xl bg-base-100">
                    <div class="card-body px-6 py-16">
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col" >
                            <div className="flex flex-col lg:flex-row w-full gap-4">
                                <input type="email" placeholder="email" class="input input-bordered  w-full" {...register("email", { required: true})} />
                                <input type="tel" placeholder="Phone" class="input input-bordered w-full" {...register("phone", { required: true})} />            
                            </div>
                            <textarea type="text" placeholder="Your Message" class="input input-bordered my-6 pb-16" {...register("message", { required: true})} />
                            <button type="submit" className='btn bg-primary'>Send </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Contact;