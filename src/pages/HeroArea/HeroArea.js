import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './HeroArea.css'

const HeroArea = () => {
    return (
        <div className="banner h-[100vh] bg-[url('/public/images/banner.jpg')] bg-center bg-cover lg:px-20">
            <div class="navbar ">
                <div class="navbar-start">
                    <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><HashLink smooth to='/home#projects'>Projects</HashLink></li>
                        <li><HashLink smooth to='/'>About</HashLink></li>
                        <li><HashLink smooth to='/home#contact'>Contact</HashLink></li>
                    </ul>
                    </div>
                    <Link to='/' class="btn btn-ghost text-white normal-case text-xl">PORTFOLIO</Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal text-white p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><HashLink smooth to='/home#projects'>Projects</HashLink></li>
                        <li><HashLink smooth to='/'>About</HashLink></li>
                        <li><HashLink smooth to='/home#contact'>Contact</HashLink></li>
                    </ul>
                </div>
                <div class="navbar-end text-white">
                    <Link to='/' class="mr-8">GitHub</Link>
                    <Link to='/' class="">LinkedIn</Link>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="hero min-h-screen  " >
                    <div className=" "></div>
                    <div className="hero-content text-center text-dark">
                        <div className="">
                            <h1 className="mb-3 text-5xl text-white font-bold">RAFIQUL ISLAM <span className='text-primary' >TUSHER</span> </h1>
                            <p className="mb-5 text-2xl text-white">I am <span className=' font-bold'>Full Stack Developer</span> </p>
                            <a target='_blank' rel="noreferrer"  href="https://drive.google.com/file/d/1RoWhQuR5hEn75DGd0W2f5gCgk8JCgwuI/view?usp=sharing"><button className="btn bg-primary">Get Resume</button></a>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroArea;