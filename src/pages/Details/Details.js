import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useProjects from '../../hooks/useProjects';

const Details = () => {
    const { id } = useParams()
    const projects = useProjects() // hook
    console.log(projects);
    return (
        <div>
            <div class="navbar px-20">
                <div class="navbar-start">
                    <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>Projects</Link></li>
                        <li><Link to='/'>Contact</Link></li>
                    </ul>
                    </div>
                    <Link to='/' class="btn btn-ghost text-dark normal-case text-xl">PORTFOLIO</Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal text-dark p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><HashLink smooth to='/home#projects'>Projects</HashLink></li>
                        <li><HashLink smooth to='/home#contact'>Contact</HashLink></li>
                    </ul>
                </div>
                <div class="navbar-end text-dark">
                    <Link to='/' class="mr-8">GitHub</Link>
                    <Link to='/' class="">LinkedIn</Link>
                </div>
            </div>
            {
                projects.map(product =>
                    <>
                        {
                            product._id === id && 
                            <div className=" mt-16">
                                <div class="hero items-start">
                                    <div class="hero-content flex-col ">
                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                            {
                                                product.images.map(image => <img src={image}  class=" shadow-2xl" alt='iamge' />)
                                            }
                                        </div>
                                        <div className='mt-12'>
                                            <div className="flex items-center">
                                                <h1 class="text-5xl font-bold">{product.title}</h1>
                                                <a target='_blank' rel="noreferrer" href={product.clientCode}><FontAwesomeIcon className='text-3xl mx-6 mt-4' icon={faGithub}></FontAwesomeIcon></a>
                                                <a target='_blank' rel="noreferrer" href={product.liveLink}><FontAwesomeIcon className='text-3xl mt-4' icon={faGlobe}></FontAwesomeIcon></a>        
                                            </div>
                                            <p class="py-6">{product.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="hero items-start">
                                    <div class="hero-content flex-col lg:flex-row  w-full">
                                        <div className=" flex flex-col items-start">
                                            <h1 className='text-3xl text-primary'>Applied Technologies</h1>
                                            <ul>
                                                {
                                                    product?.tols.map(tool =>
                                                        <li>
                                                            {tool}
                                                        </li>
                                                    )             
                                                }
                                            </ul>            
                                        </div>
                                        <div>
                                            <h1 className='text-3xl text-primary'>Features</h1>
                                            <ul>
                                                {
                                                    product?.features.map(feature =>
                                                        <li>
                                                            {feature}
                                                        </li>
                                                    )             
                                                }
                                            </ul>
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