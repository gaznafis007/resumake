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

    const value ={
        editSection,
        setEditSection,
        fullName,
        jobTitle,
        email,
        phone,
        address,
        setFullName,
        setJobTitle,
        setEmail,
        setPhone,
        setAddress,
    }
    return (
        <ResumeInfoContext.Provider value={value}>
            {children}
        </ResumeInfoContext.Provider>
    );
};

export default ResumeInfoProvider;