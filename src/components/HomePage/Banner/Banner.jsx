import DefaultButton from '@/components/DefaultButton/DefaultButton';
import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";

const Banner = () => {
    return (
        <section className='rounded-xl mt-4 md:mt-8 px-8 py-32 md:py-48 bg-cover' style={{
            backgroundImage: `linear-gradient(rgba(0,0,0, 0.6), rgba(0,0,0, 0.1)), url('https://images.pexels.com/photos/3184424/pexels-photo-3184424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`
        }}>
            <h2 className="text-4xl text-white mt-4">Join over <span className='font-bold'>2.3 million</span> users</h2>
            <p className="mt-6 text-white w-full md:w-1/2">Empower your career growth and success today and join 1.4 million users in transforming your professional path with ResuMake.</p>
            <DefaultButton optionalStyle={'mt-8'}>
                <div className="flex flex-row space-x-2">
                <FiArrowUpRight className='text-xl'/>
                <p>Start with free</p>
                </div>
            </DefaultButton>
        </section>
    );
};

export default Banner;