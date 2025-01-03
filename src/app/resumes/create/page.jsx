"use client";
import Modal from "@/components/Modal/Modal";
import ResumeOutput from "@/components/ResumeOutput/ResumeOutput";
import ResumePersonalInfo from "@/components/ResumePersonalInfo/ResumePersonalInfo";
import ResumeTitle from "@/components/ResumeTitle/ResumeTitle";
import SideNav from "@/components/SideNav/SideNav";
import ResumeInfoProvider from "@/contexts/ResumeInfoProvider";

import React, { useState } from "react";

const Create = () => {
  const [activeSection, setActiveSection] = useState("");
  return (
    <ResumeInfoProvider>
      <section className="p-6 flex flex-col md:flex-row gap-6">
        {/* sideNav */}
        <SideNav
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <div className="flex flex-col w-full md:w-4/12">
          <ResumeTitle />
          {/* Resume form */}
          <ResumePersonalInfo />
        </div>
        <ResumeOutput />
      </section>
      {activeSection === "view" && (
        <Modal setOpen={setActiveSection} index={'z-10'} position={'left-24 top-8'}>
          <section className={`w-full h-full`}>
            <div className='bg-white rounded-lg p-8'>
            <h2 className={`text-3xl text-slate-800`}>This is Output</h2>
            </div>
        </section>
        </Modal>
      )}
    </ResumeInfoProvider>
  );
};

export default Create;
