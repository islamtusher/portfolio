import React from 'react';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useProjects from '../../hooks/useProjects';
import Aos from 'aos';

const Details = () => {
    const { id } = useParams()
    const projects = useProjects() // Custom hook
    Aos.init({
        duration: 600
    });
    return (
        <div id={id} className="bg-[#111]">
            <div className='min-h-[100vh] max-w-[1360px] mx-auto text-white'>
                <div class="navbar mx-auto pt-6 pr-8 lg:px-2 font-[Montserrat] text-gray-100  tracking-wider">
                    <div class="navbar-start">
                        <div class="dropdown">
                            <label tabindex="0" class="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to='/'>Home</Link></li>
                                <li><HashLink smooth to='/home#skills'>SKILLS</HashLink></li>
                                <li><HashLink smooth to='/home#projects'>Projects</HashLink></li>
                                <li><HashLink smooth to='/home#about'>About</HashLink></li>
                                <li><HashLink smooth to='/home#contact'>Contact</HashLink></li>
                            </ul>
                        </div>
                        <Link to='/' class=" text-xl">
                            <img className='w-[45px] ' src='https://rokstar-react.netlify.app/_ipx/w_64,q_75/%2Fimages%2Flogo-light.png?url=%2Fimages%2Flogo-light.png&w=64&q=75' alt='logo' />                        
                        </Link>
                    </div>
                    <div class="navbar-center hidden lg:flex">
                        <ul class="menu menu-horizontal font-light p-0">
                            <li><Link to='/'>HOME</Link></li>
                            <li><HashLink smooth to='/home#skills'>SKILLS</HashLink></li>
                            <li><HashLink smooth to='/home#projects'>PROJECTS</HashLink></li>
                            <li><HashLink smooth to='/home#about'>ABOUT</HashLink></li>
                            <li><HashLink smooth to={`/details/${id}#contact`}>CONTACT</HashLink></li>
                        </ul>
                    </div>
                    <div class="navbar-end text-white">                    
                        <a target='_blank' rel="noreferrer" href='https://github.com/islamtusher'>                        
                            <FontAwesomeIcon
                                className='text-[22px] mr-6 text-dark hover:text-primary text-white cursor-pointer'
                                icon={faGithub}>
                            </FontAwesomeIcon>
                        </a>
                        <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/rafiqul-islam-tusher/'>
                            <FontAwesomeIcon
                                className='text-[22px] text-white text-dark hover:text-primary cursor-pointer'
                                icon={faLinkedinIn}>
                            </FontAwesomeIcon>
                        </a>
                    
                    </div>
                </div>
                {
                    projects.map(product =>
                        <>
                            {
                                product._id === id && 
                                <div className=" mt-8">
                                    <div class="hero items-start">
                                        <div class="hero-content  flex-col ">
                                            <div data-aos="flip-up" className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                                {
                                                    product.images.map(image => <img src={image}  class=" shadow-2xl" alt='iamge' />)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="max-w-[1360px] p-4 mx-auto ">
                                        <div className="mt-4 mb-6">
                                            <h1 class="text-3xl font-bold text-center">{product.title}</h1>
                                            <div class="card-actions justify-center items-center mt-6 lg:mt-0">
                                                <a className='hover:text-sky-400 text-primary font-bold' target='_blank' rel="noreferrer" href={product.clientCode}>
                                                    Client Code 
                                                </a>
                                                <p className=' text-primary text-xl'>|</p>
                                                {
                                                    product.serverCode &&
                                                    <>
                                                        <a className='hover:text-sky-400 text-primary font-bold' target='_blank' rel="noreferrer" href={product.serverCode}>
                                                        Server Code
                                                        </a>
                                                        <p className=' text-primary text-xl'>|</p>
                                                    </>
                                                }
                                                <a className='hover:text-sky-400 text-primary font-bold' target='_blank' rel="noreferrer" href={product.liveLink}>
                                                    Demo
                                                </a>
                                            </div>           
                                        </div>
                                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
                                            <div className=''>
                                                <h1 className='text-2xl text-center text-white mb-4'>Explanation</h1>
                                                <p class="text-gray-200 text-justify text-lg">{product.description}</p>
                                            </div>   
                                            <div class="flex-col lg:flex-row">
                                                <h1 className='text-2xl text-white text-center mb-4'>Applied Technologies</h1>
                                                <div className=" grid grid-cols-3 lg:grid-cols-4 gap-4">
                                                    <div className="flex flex-col items-center justify-between gap-2">
                                                        <img className='w-[40px]' src="/images/skills/skill-2.png" alt='' />
                                                        <p  className=' text-lg text-gray-100  tracking-wider'>HTML</p>
                                                    </div>
                                                    <div className="flex flex-col items-center justify-between gap-2">
                                                        <img className='w-[40px]' src="/images/skills/skill-3.png" alt='' />
                                                        <p className=' text-lg text-gray-100 tracking-wider'>CSS</p>    
                                                    </div>
                                                    {
                                                        product?.tols?.map(tool => 
                                                                tool === "Bootstrap" &&
                                                                <div className="flex flex-col items-center justify-between gap-2">
                                                                    <img className='w-[40px]' src="/images/skills/skill-6.png" alt='' />
                                                                    <p className=' text-lg text-gray-100 tracking-wider'>Bootstrap </p>
                                                                </div>
                                                            
                                                            )                                                                                                                         
                                                    }
                                                    {
                                                        product?.tols?.map(tool => 
                                                                tool === "Tailwind CSS" &&
                                                                <div className="flex flex-col items-center justify-end gap-2">
                                                                    <img className='w-[50px]' src="/images/skills/skill-8.png" alt='' />
                                                                    <p className=' text-lg text-gray-100 tracking-wider'>Tailwind </p>
                                                                </div>
                                                            
                                                            )                                                                                                                         
                                                    }
                                                    
                                                    <div className="flex flex-col items-center justify-between gap-2">
                                                        <img className='w-[35px]' src="/images/skills/skill-5.png" alt='' />
                                                        <p  className=' text-lg text-gray-100 tracking-wider'>React</p>
                                                    </div>
                                                    <div className="flex flex-col items-center justify-between gap-2">
                                                        <img className='w-[35px]' src="/images/skills/skill-7.png" alt='' />
                                                        <p  className=' text-lg text-gray-100 tracking-wider'> Javascript</p>
                                                    </div>
                                                        
                                                    {
                                                        product?.tols?.map(tool => 
                                                                tool === 'MongoDB' &&
                                                                <div className="flex flex-col items-center justify-between gap-2">
                                                                    <img className='w-[40px]' src="/images/mongodb.png" alt='' />
                                                                    <p  className=' text-lg text-gray-100 tracking-wider'> MongoDB</p>
                                                                </div>
                                                            
                                                            )                                                                                                                         
                                                    }            
                            
                                                </div>
                                            </div>
                                            <div>
                                                <h1 className='text-2xl text-white text-center mb-4'>Features</h1>
                                                <ul className='list-disc pl-6 text-gray-200 text-lg'>
                                                    {
                                                        product?.features.map(feature =>
                                                            <li>
                                                                {feature},
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
        </div>
        );
    };
                                                    
                                                    


export default Details;