"use client"
import React, { createContext, useState } from 'react';

export const ResumeInfoContext = createContext()
const ResumeInfoProvider = ({
    children
}) => {
    const [editSection, setEditSection] = useState(null)
    const value ={
        editSection,
        setEditSection
    }
    return (
        <ResumeInfoContext.Provider value={value}>
            {children}
        </ResumeInfoContext.Provider>
    );
};

export default ResumeInfoProvider;