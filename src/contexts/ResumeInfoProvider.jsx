"use client"
import React, { createContext, useState } from 'react';

export const ResumeInfoContext = createContext()
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
const ResumeInfoProvider = ({
    children
}) => {
    const [editSection, setEditSection] = useState(null);
    const [fullName, setFullName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [socialLinks, setSocialLinks] = useState([])
    const [profileSection, setProfileSection] = useState(null);
    const [educationSection, setEducationSection] = useState(null);
    const [experience, setExperience] = useState(null);
    const [skill, setSkill] = useState(null);
    const [language, setLanguage] = useState(null);
    const [certificate, setCertificate] = useState(null);
    const [interest, setInterest] = useState(null);
    const [project, setProject] = useState(null);
    const [course, setCourse] = useState(null);
    const [award, setAward] = useState(null);
    const [organization, setOrganization] = useState(null);
    const [publication, setPublication] = useState(null);
    const [declaration, setDeclaration] = useState(null);
    const [reference, setReference] = useState(null);
    const [custom, setCustom] = useState(null);
    const [sections, setSections] = useState(null)
    const value ={
        editSection,
        setEditSection,
        fullName,
        jobTitle,
        email,
        phone,
        address,
        socialLinks,
        sections,
        profileSection,
        educationSection,
        experience,
        skill,
        language,
        certificate,
        interest,
        project,
        course,
        award,
        organization,
        publication,
        declaration,
        reference,
        custom,
        setFullName,
        setJobTitle,
        setEmail,
        setPhone,
        setAddress,
        setSocialLinks,
        setProfileSection,
        setEducationSection,
        setExperience,
        setSkill,
        setLanguage,
        setCertificate,
        setInterest,
        setProject,
        setCourse,
        setAward,
        setOrganization,
        setPublication,
        setDeclaration,
        setReference,
        setCustom,
        setSections
    }
    return (
        <ResumeInfoContext.Provider value={value}>
            {children}
        </ResumeInfoContext.Provider>
    );
};

export default ResumeInfoProvider;