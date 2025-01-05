"use client"
import React, { createContext, useState } from 'react';

export const ResumeInfoContext = createContext()

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
    const [sectionCollapse, setSectionCollapse] = useState('')
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
        sectionCollapse,
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
        setSections,
        setSectionCollapse
    }
    return (
        <ResumeInfoContext.Provider value={value}>
            {children}
        </ResumeInfoContext.Provider>
    );
};

export default ResumeInfoProvider;