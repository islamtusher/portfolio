import React from 'react';
import { faGithub, faLinkedin, faJs } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useProjects from '../../hooks/useProjects';

const Details = () => {
    const { id } = useParams()
    const projects = useProjects() // hook
    console.log(projects);
    return (
        <div className='bg-[#191919] text-white'>
            <div class="navbar px-20 ">
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
                    <Link to='/' class="btn btn-ghost text-dark normal-case text-xl">RIT</Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal text-dark p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><HashLink smooth to='/home#projects'>Projects</HashLink></li>
                        <li><HashLink smooth to='/home#contact'>Contact</HashLink></li>
                    </ul>
                </div>
                <div class="navbar-end text-dark">
                <a target='_blank' rel="noreferrer" href='https://github.com/islamtusher'>                        
                        <FontAwesomeIcon
                            className='text-[27px] mr-6 text-dark hover:text-primary cursor-pointer'
                            icon={faGithub}>
                        </FontAwesomeIcon>
                    </a>
                    <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/rafiqul-islam-tusher/'>
                        <FontAwesomeIcon
                            className='text-[27px]  text-dark hover:text-primary cursor-pointer'
                            icon={faLinkedin}>
                        </FontAwesomeIcon>
                    </a>
                
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
                                    </div>
                                </div>
                                <div className="max-w-[1360px] p-4 mx-auto ">
                                    <div className="flex items-center my-4">
                                        <h1 class="text-3xl font-bold text-center">{product.title}</h1>
                                        <a target='_blank' rel="noreferrer" href={product.clientCode}><FontAwesomeIcon className='text-3xl mx-6 mt-4' icon={faGithub}></FontAwesomeIcon></a>
                                        <a target='_blank' rel="noreferrer" href={product.liveLink}><FontAwesomeIcon className='text-3xl mt-4' icon={faGlobe}></FontAwesomeIcon></a>        
                                    </div>
                                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
                                        <div className=''>
                                            <h1 className='text-xl text-primary'>Explanation</h1>
                                            <p class="">{product.description}</p>
                                        </div>   
                                        <div class="flex-col lg:flex-row">
                                            <h1 className='text-xl text-primary text-center'>Applied Technologies</h1>
                                            <div className=" grid grid-cols-1 lg:grid-cols-4 gap-4">
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
                                            <h1 className='text-xl text-primary text-center'>Features</h1>
                                            <ol>
                                                {
                                                    product?.features.map(feature =>
                                                        <li>
                                                            {feature},
                                                        </li>
                                                    )             
                                                }
                                            </ol>
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