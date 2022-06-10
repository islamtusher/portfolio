import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useProjects from '../../hooks/useProjects';

const Details = () => {
    const { id } = useParams()
    const projects = useProjects() // hook
    console.log(projects);
    return (
        <div>
            {
                projects.map(product =>
                <>
                    {
                        product._id === id && 
                        <div className="">
                            <div class="hero min-h-screen bg-base-200">
                                <div class="hero-content flex-col lg:flex-row">
                                    <img src={product.image}  class=" shadow-2xl" alt='iamge' />
                                    <div>
                                        <h1 class="text-5xl font-bold">{product.title}</h1>
                                        <p class="py-6">{product.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </>)
            }
        </div>
    );
};

export default Details;