import React from 'react';
import Header from '../Header/Header';
import DefaultButton from '../DefaultButton/DefaultButton';
import Image from 'next/image';
import { getData } from '@/libs/getData';
import FeatureCard from '../FeatureCard/FeatureCard';

const HomePage = async () => {
    const features = await getData('/api/features');
    console.log(features)
    const sectionOne = <>
        <h1 className="text-7xl text-violet-800 capitalize">
          turn your skills into opportunities
        </h1>
        <p className="mt-4 md:mt-8 font-thin text-slate-800">
          Your resume is more than just a document—it's your first impression,
          your story, and your key to unlocking new opportunities. With our
          easy-to-use resume builder, you can create a professional and polished
          resume tailored to your unique strengths and experiences. Choose from
          sleek templates, customize every detail, and export your masterpiece
          in minutes. Whether you're a recent graduate or an experienced
          professional, we make it simple to showcase your skills and land the
          job you deserve.
        </p>
        <DefaultButton optionalStyle={'mt-4 md:mt-8'}>Get started- it's free</DefaultButton>
    </>
    const sectionTwo = <>
        <Image className="rounded-md" src={'https://images.pexels.com/photos/4064840/pexels-photo-4064840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt="header-image" width={720} height={540}/>
    </>
    return (
        <section className='mx-4 md:mx-12 mt-6'>
            <Header sectionOne={sectionOne} sectionTwo={sectionTwo}/>
            <div className="mt-4 md:mt-8 grid grid-cols-1 grid-cols-5 gap-2">
                {
                    features?.map((feature, idx) =><FeatureCard key={idx} bgColor={feature?.bgColor} title={feature?.title} description={feature?.description} color={'text-white'}/>)
                }
            </div>
        </section>
    );
};

export default HomePage;