import React from 'react';
import image from '../assets/1690599118750 (1).jpg'

const Hireme = () => {
    return (
        <section id='hireme' className='py-10 px-3 text-white'>
            <div className='text-center'>
                <h3 className='text-4xl font-semibold'>
                    Hire <span className='text-cyan-600'>Me</span>
                </h3>
                <p className='text-gray-400 mt-3 text-lg'>Do you have any work?</p>
            </div>
                <div className='bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[32rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center'>
                    <div>
                        <h2 className='text-2xl font-semibold'>Do you want any work from me?</h2>
                        <p className='lg:text-left text-justify max-w-lg text- mt-4 text-gray-200 leading-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, alias? Harum, laborum! Sit natus sint dolorum amet maxime, facere tenetur assumenda aperiam eius id, error nihil est. At, ipsa commodi.</p>
                        <button className='btn-primaary'>Say Hello</button>
                    </div>
                    <img src={image} alt="" className='lg:h-[32rem] h-80 lg:absolute bottom-0 right-3 object-cover' />
                </div>
        </section>
    );
};

export default Hireme;