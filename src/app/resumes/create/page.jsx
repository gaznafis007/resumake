"use client";
import Modal from "@/components/Modal/Modal";
import PdfOutput from "@/components/PdfOutput/PdfOutput";
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
        <div className="flex flex-col w-full md:w-5/12">
          <ResumeTitle />
          {/* Resume form */}
          <ResumePersonalInfo />
        </div>
        {/* Resume's output */}
        <section onClick={() =>setActiveSection('view')} className={`hidden md:block md:w-1/2 rounded-md bg-white shadow-xl cursor-zoom-in`}>
        <ResumeOutput />
        </section>
      </section>
      {activeSection === "view" && (
        <Modal setOpen={setActiveSection} index={'z-10'} position={'left-6 top-8 mr-6'}>
          <PdfOutput/>
        </Modal>
      )}
    </ResumeInfoProvider>
  );
};

export default Create;
