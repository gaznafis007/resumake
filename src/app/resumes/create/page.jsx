"use client";
import ResumeTitle from '@/components/ResumeTitle/ResumeTitle';
import SideNav from '@/components/SideNav/SideNav';
import React, { useState } from 'react';

const Create = () => {
    const [activeSection, setActiveSection] = useState('')
    return (
        <section className='p-6 flex flex-col md:flex-row gap-6'>
            {/* sideNav */}
            <SideNav activeSection={activeSection} setActiveSection={setActiveSection}/>
            <div className="flex flex-col w-full md:w-4/12">
            <ResumeTitle/>
            </div>
        </section>
    );
};

export default Create;