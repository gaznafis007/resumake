"use client";
import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import Modal from "@/components/Modal/Modal";
import PdfOutput from "@/components/PdfOutput/PdfOutput";
import ResumeOutput from "@/components/ResumeOutput/ResumeOutput";
import ResumePersonalInfo from "@/components/ResumePersonalInfo/ResumePersonalInfo";
import ResumeTitle from "@/components/ResumeTitle/ResumeTitle";
import SideNav from "@/components/SideNav/SideNav";
import { ResumeInfoContext } from "@/contexts/ResumeInfoProvider";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import React, { useContext, useState } from "react";
import {
  FaPlus,
  FaUserCircle,
  FaGraduationCap,
  FaBriefcase,
  FaTools,
  FaLanguage,
  FaCertificate,
  FaHeart,
  FaProjectDiagram,
  FaBook,
  FaTrophy,
  FaUsers,
  FaFileAlt,
  FaUserFriends,
  FaSignature,
  FaPuzzlePiece
} from "react-icons/fa";
import ResumeEditProfile from "@/components/ResumeEditProfile/ResumeEditProfile";
import ResumeEditEducation from "@/components/ResumeEditEducation/ResumeEditEducation";
import ResumeEditExperience from "@/components/ResumeEditExperience/ResumeEditExperience";
import ResumeEditSkill from "@/components/ResumeEditSkill/ResumeEditSkill";
import ResumeEditLanguage from "@/components/ResumeEditLanguage/ResumeEditLanguage";
import ResumeEditCertificate from "@/components/ResumeEditCertificate/ResumeEditCertificate";
import ResumeEditInterest from "@/components/ResumeEditInterest/ResumeEditInterest";
import ResumeEditProject from "@/components/ResumeEditProject/ResumeEditProject";
import ResumeEditCourse from "@/components/ResumeEditCourse/ResumeEditCourse";
import ResumeEditAward from "@/components/ResumeEditAward/ResumeEditAward";
import ResumeEditOrganization from "@/components/ResumeEditOrganization/ResumeEditOrganization";
import ResumeEditPublication from "@/components/ResumeEditPublication/ResumeEditPublication";
import ResumeEditReference from "@/components/ResumeEditRefernece/ResumeEditReference";
import ResumeEditDeclaration from "@/components/ResumeEditDeclaration/ResumeEditDeclaration";
import ResumeEditCustomSection from "@/components/ResumeEditCustomSection/ResumeEditCustomSection";
import Customize from "@/components/Customize/Customize";


const contentSections = [
  {
    id: "profile",
    title: "Profile",
    description: "Make a great first impression by presenting yourself in a few sentences.",
    icon: <FaUserCircle />,
    component: <ResumeEditProfile />, // Corresponding component
  },
  {
    id: "education",
    title: "Education",
    description: "Show off your primary education, college degrees & exchange semesters.",
    icon: <FaGraduationCap />,
    component: <ResumeEditEducation />, // Corresponding component
  },
  {
    id: "professional-experience",
    title: "Professional Experience",
    description: "A place to highlight your professional experience - including internships.",
    icon: <FaBriefcase />,
    component: <ResumeEditExperience />, // Corresponding component
  },
  {
    id: "skill",
    title: "Skill",
    description: "List your technical, managerial or soft skills in this section.",
    icon: <FaTools />,
    component: <ResumeEditSkill />, // Corresponding component
  },
  {
    id: "language",
    title: "Language",
    description: "You speak more than one language? Make sure to list them here.",
    icon: <FaLanguage />,
    component: <ResumeEditLanguage />, // Corresponding component
  },
  {
    id: "certificate",
    title: "Certificate",
    description: "Drivers licenses and other industry-specific certificates you have belong here.",
    icon: <FaCertificate />,
    component: <ResumeEditCertificate />, // Corresponding component
  },
  {
    id: "interest",
    title: "Interest",
    description: "Do you have interests that align with your career aspiration?",
    icon: <FaHeart />,
    component: <ResumeEditInterest />, // Corresponding component
  },
  {
    id: "project",
    title: "Project",
    description: "Worked on a particular challenging project in the past? Mention it here.",
    icon: <FaProjectDiagram />,
    component: <ResumeEditProject />, // Corresponding component
  },
  {
    id: "course",
    title: "Course",
    description: "Did you complete MOOCs or an evening course? Show them off in this section.",
    icon: <FaBook />,
    component: <ResumeEditCourse />, // Corresponding component
  },
  {
    id: "award",
    title: "Award",
    description: "Awards like student competitions or industry accolades belong here.",
    icon: <FaTrophy />,
    component: <ResumeEditAward />, // Corresponding component
  },
  {
    id: "organization",
    title: "Organization",
    description: "If you volunteer or participate in a good cause, why not state it?",
    icon: <FaUsers />,
    component: <ResumeEditOrganization />, // Corresponding component
  },
  {
    id: "publication",
    title: "Publication",
    description: "Academic publications or book releases have a dedicated place here.",
    icon: <FaFileAlt />,
    component: <ResumeEditPublication />, // Corresponding component
  },
  {
    id: "reference",
    title: "Reference",
    description: "If you have former colleagues or bosses that vouch for you, list them.",
    icon: <FaUserFriends />,
    component: <ResumeEditReference />, // Corresponding component
  },
  {
    id: "declaration",
    title: "Declaration",
    description: "You need a declaration with signature?",
    icon: <FaSignature />,
    component: <ResumeEditDeclaration />, // Corresponding component
  },
  {
    id: "custom",
    title: "Custom",
    description:
      "You didn't find what you are looking for? Or you want to combine two sections to save space?",
    icon: <FaPuzzlePiece />,
    component: <ResumeEditCustomSection />, // Corresponding component
  },
];


const Create = () => {
  const [activeSection, setActiveSection] = useState("content");
  const [open, setOpen] =useState(false);
  const {sections,sectionCollapse, setSections, setSectionCollapse} = useContext(ResumeInfoContext)

  return (
    <>
      <section className="p-6 flex flex-col md:flex-row gap-6">
        {/* sideNav */}
        <SideNav
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <section className="flex flex-col w-full md:w-5/12">
          <ResumeTitle />
          {/* Resume form */}
          {
            activeSection !== 'customize' && (
              <>
                  <ResumePersonalInfo />
          {
            sections && (
              <div className="mt-4 md:mt-8 grid grid-cols-1 gap-4">
          {
            sections?.map ( (section, idx) =>(
              <div key={idx} className=" bg-white rounded-lg p-4">
                <div className="flex flex-row space-x-3 text-xl items-center justify-between text-purple-800">
                  <div className="flex flex-row space-x-3 items-center">
                  {section?.icon}
                  <h2 className="text-2xl">{section?.title}</h2>
                  </div>
                  {sectionCollapse == section?.title ?<IoIosArrowUp className="cursor-pointer" onClick={() => setSectionCollapse('')}/> :<IoIosArrowDown className="cursor-pointer" onClick={() => setSectionCollapse(section?.title)}/>}
                </div>
                {
                  sectionCollapse == section?.title &&  (section?.component)
                }
              </div>
            ))
          }
          </div>
            )
          }
          <Button handler={setOpen} params={true} style={'rounded-lg px-8 py-3 bg-purple-600 hover:bg-purple-800 mt-4 md:mt-8'}>
            <div className="flex flex-row space-x-2 items-center text-xl text-white capitalize justify-center">
              <FaPlus/>
              <p>add content</p>
            </div>
          </Button>
              </>
            )
          }
          {
            activeSection == 'customize' && <Customize/>
          }
        </section>
        {/* Resume's output */}
        <section onClick={() =>setActiveSection('view')} className={`hidden md:block md:w-1/2 rounded-md bg-white shadow-xl cursor-zoom-in`}>
        <ResumeOutput />
        {/* <ResumeOutputPDF/> */}
        {/* <PdfOutput/> */}
        </section>
      </section>
      {
        open && (
          <Modal setOpen={setOpen} index={'z-10'} position={'left-6 top-6 mr-6'}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {
              contentSections?.map(section => <Card handler={() =>{
                const newProfileSection = {
                  title: section?.title,
                  icon: section?.icon, 
                  component: section?.component
                }
                let newSections = []
                if(sections == null){
                  newSections = [newProfileSection];
                  // console.log(newSections)
                }
                else{
                newSections = [...sections, newProfileSection];
                
                }
                setSections(newSections)
                // console.log(newSections)
                setOpen(false)
              }} key={section?.id} style={`cursor-pointer hover:bg-slate-200 hover:shadow-md`} title={
                <div className="flex flex-row space-x-2 items-center">
                  {section?.icon}
                  <span>{section?.title}</span>
                </div>
              } description={section?.description}/>)
            }
            </div>
          </Modal>
        )
      }
      {activeSection === "view" && (
        <Modal setOpen={setActiveSection} index={'z-10'} position={'left-6 top-6 mr-6'}>
          <PdfOutput/>
        </Modal>
      )}
    </>
  );
};

export default Create;
