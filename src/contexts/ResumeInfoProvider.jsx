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
    const [profileSection, setProfileSection] = useState(null)
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
        profileSection,
        sections,
        setFullName,
        setJobTitle,
        setEmail,
        setPhone,
        setAddress,
        setSocialLinks,
        setProfileSection,
        setSections
    }
    return (
        <ResumeInfoContext.Provider value={value}>
            {children}
        </ResumeInfoContext.Provider>
    );
};

export default ResumeInfoProvider;