import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './HeroArea.css'

const HeroArea = () => {
    return (
        <div className="banner h-[100vh] bg-[url('/public/images/portfolioBanner.jpg')] bg-center bg-cover bg-fixed lg:px-20">
            <div class="navbar max-w-[1428px] mx-auto pt-6">
                <div class="navbar-start">
                    <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><HashLink smooth to='/home#projects'>Projects</HashLink></li>
                        <li><HashLink smooth to='/home#about'>About</HashLink></li>
                        <li><HashLink smooth to='/home#contact'>Contact</HashLink></li>
                    </ul>
                    </div>
                    <Link to='/' class="btn btn-ghost text-white normal-case text-xl">RIT</Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal text-white p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><HashLink smooth to='/home#projects'>Projects</HashLink></li>
                        <li><HashLink smooth to='/home#about'>About</HashLink></li>
                        <li><HashLink smooth to='/home#contact'>Contact</HashLink></li>
                    </ul>
                </div>
                <div class="navbar-end text-white">                    
                    <a target='_blank' rel="noreferrer" href='https://github.com/islamtusher'>                        
                        <FontAwesomeIcon
                            className='text-[27px] mr-6 text-dark hover:text-primary text-white cursor-pointer'
                            icon={faGithub}>
                        </FontAwesomeIcon>
                    </a>
                    <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/rafiqul-islam-tusher/'>
                        <FontAwesomeIcon
                            className='text-[27px] text-white text-dark hover:text-primary cursor-pointer'
                            icon={faLinkedin}>
                        </FontAwesomeIcon>
                    </a>
                
                </div>
            </div>
            <div className="flex flex-row">
                <div className="hero min-h-screen  " >
                    <div className=" "></div>
                    <div className="hero-content text-center text-dark">
                        <div className="">
                            <h1 className="mb-3 text-5xl text-white font-bold font-[Oswald] tracking-wider">RAFIQUL ISLAM <span className='text-primary' >TUSHER</span> </h1>
                            <p className="mb-5 text-xl text-white uppercase tracking-wider">I AM <span className=' '>Full Stack Developer</span> </p>
                            <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1RoWhQuR5hEn75DGd0W2f5gCgk8JCgwuI/view?usp=sharing">
                                <button className="btn bg-transparent border text-lg font-normal px-5 ">
                                    Get Resume
                                </button>
                            </a>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroArea;