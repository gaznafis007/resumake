import React from "react";
import Header from "../Header/Header";
import DefaultButton from "../DefaultButton/DefaultButton";
import Image from "next/image";
import { getData } from "@/libs/getData";
import FeatureCard from "../FeatureCard/FeatureCard";
import Banner from "./Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Link from "next/link";

const HomePage = async () => {
  const features = await getData("/api/features");
//   console.log(features);
  const sectionOne = (
    <>
      <h1 className="text-7xl text-violet-800 capitalize">
        turn your skills into opportunities
      </h1>
      <p className="mt-4 md:mt-8 font-thin text-slate-800">
        Your resume is more than just a document—it's your first impression,
        your story, and your key to unlocking new opportunities. With our
        easy-to-use resume builder, you can create a professional and polished
        resume tailored to your unique strengths and experiences. Choose from
        sleek templates, customize every detail, and export your masterpiece in
        minutes. Whether you're a recent graduate or an experienced
        professional, we make it simple to showcase your skills and land the job
        you deserve.
      </p>
      <DefaultButton optionalStyle={"mt-4 md:mt-8"}>
        <Link href={'/resumes'}>Get started- it's free</Link>
      </DefaultButton>
    </>
  );
  const sectionTwo = (
    <>
      <Image
        className="rounded-md"
        src={
          "https://images.pexels.com/photos/4064840/pexels-photo-4064840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        alt="header-image"
        width={720}
        height={540}
      />
    </>
  );
  const secondarySectionOne = (
    <>
      <h1 className="text-7xl text-slate-800 mt-4 md:mt-12">
        Showcase Yourself
      </h1>
    </>
  );
  const secondarySectionTwo = (
    <>
      <div className="flex flex-col mt-4 md:mt-12">
        <p className="text-slate-800 font-thin">
          ResuMake is more than just a resume builder – it's a revolutionary
          platform designed to elevate your job search experience. Our focus is
          on empowering job seekers like you to present their full potential and
          secure their dream roles, all while saving time and enjoying the
          process as much as we've enjoyed creating it!
        </p>
        <p className="text-slate-800 font-thin mt-6 hidden md:block">
          Design a seamless visual journey across your application and visual
          appearance that reflects your unique identity, making each aspect of
          your application uniquely yours. With ResuMake, you can present
          yourself confidently and professionally, leaving a memorable
          impression on potential employers. Start building your distinctive
          brand today!
        </p>
      </div>
    </>
  );
  const staticSectionOne = (
    <>
      <Image
        src={
          "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        alt="person"
        className="rounded-lg mt-4 md:mt-12"
        width={720}
        height={540}
      />
    </>
  );
  const staticSectionTwo = (
    <>
      <div className="flex flex-col space-y-4">
        {/* first row in large */}
        <div className="flex flex-col md:flex-row md:space-x-3 md:space-y-0 space-y-3">
          <div className="w-full md:w-2/3 bg-purple-400 rounded-lg p-6">
            <h2 className="text-4xl text-white mb-16">
              Unlock a world of opportunities to shape your career journey
            </h2>
          </div>
          <div className="w-full md:w-1/3 bg-sky-400 rounded-lg p-6">   
            <h2 className="text-4xl text-white mb-16">
              Effortless Application Creation
            </h2>
          </div>
        </div>
        {/* second row in large */}
        <div className="bg-violet-700 rounded-lg p-6">
            <h2 className="text-white text-4xl mb-16">
            Become the standout candidate to potential employers
            </h2>
        </div>
        {/* Third row in large */}
        <div className="flex flex-col md:flex-row md:space-x-3 md:space-y-0 space-y-3">
          <div className="w-full md:w-1/3 bg-rose-400 rounded-lg p-4">
            <h2 className="text-4xl text-white mb-16">
            Confidence strengthened by Personal Branding
            </h2>
          </div>
          <div className="w-full md:w-2/3 bg-slate-400 rounded-lg p-6">   
            <h2 className="text-4xl text-white mb-16">
            Streamlined application creation, freeing up more time for your preparation
            </h2>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <>
    <Navbar/>
    <section className="mx-4 md:mx-8 mt-6">
      <Header sectionOne={sectionOne} sectionTwo={sectionTwo} />
      {features && (
        <div className="mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-5 gap-2">
          {features?.map((feature, idx) => (
            <FeatureCard
              key={idx}
              bgColor={feature?.bgColor}
              title={feature?.title}
              description={feature?.description}
              color={"text-white"}
            />
          ))}
        </div>
      )}
      <Header
        sectionOne={secondarySectionOne}
        sectionTwo={secondarySectionTwo}
      />
      <Header
      sectionOneWidth={'md:w-1/3'}
      sectionTwoWidth={'md:w-2/3'}
        sectionOne={staticSectionOne}
        sectionTwo={staticSectionTwo}
      />
      <Banner/>
    </section>
    <Footer/>
    </>
  );
};

export default HomePage;
