import React from 'react';
import aboutImg from '../assets/1690599118750 (1).jpg'
import cv from '../assets/Resume update file.pdf'

const About = () => {
    const info =[
        {text:'Years experience', count:'01'},
        {text:'Completed Projects', count:'04'},
        {text:'Companies Work',count:'00'}
    ]
    return (
        <section id='about' className='py-10 text-white'>
            <div className='text-center mt-8'>
                <h3 className='text-4xl font-semibold'>
                    About <span className='text-cyan-600'>Me</span>
                </h3>
                <p className='text-gray-400 my-3 text-lg'>My Introduction</p>
                <div className='flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
                    <div className='p-2'>
                        <div className='text-gray-300 my-3'>
                            <p className='text-justify leading-7 w-11/12 mx-auto'>Hello again! Thanks for scrolling this far!! I have completed my Diploma in Agriculture from Agriculture Training Institute, Begumganj,Noakhali.</p>
                            <br />
                            <p> I am a passionate front-end developer from figital Bangladesh. I have a strong love for creating beautiful and user-friendly websites that leave a lasting impression.
                                Other than coding, I spend most of my free time playing video games . I've also been trying to read more so feel free to reach out to me with any book recommendations!</p><div className='flex mt-10 items-center gap-7'>
                                {
                                    info.map(content =>(
                                        <div key={content.text}>
                                            <h3 className='md:text-4xl text-2xl font-semibold text-white'>{content.count} <span className='text-cyan-600'>+</span>{""}
                                            </h3>
                                            <span className='md:text-base text-xs'>{content.text}</span>
                                        </div>
                                    ))
                                }
                                
                            </div>
                            <br/>
                            <br/>
                            <a href={cv}>
                            <button className='btn-primary'>Download cv</button>
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
                    
                </div>
                
            </div>
        </section>
    );
};

export default About;



 
