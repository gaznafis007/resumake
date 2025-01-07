"use client"
import React, { createContext, useState } from 'react';
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export const ResumeInfoContext = createContext()

const ResumeInfoProvider = ({
    children
}) => {
    const [editSection, setEditSection] = useState(null);
    const [experience, setExperience] = useState(null);
    const [sections, setSections] = useState(null)
    const [sectionCollapse, setSectionCollapse] = useState('')
    const value ={
        editSection,
        sections,
        sectionCollapse,
        setEditSection,
        setSections,
        setSectionCollapse
    }
    return (
        <ResumeInfoContext.Provider value={value}>
            <Provider store={store}>
            {children}
            </Provider>
        </ResumeInfoContext.Provider>
    );
};

export default ResumeInfoProvider;