"use client";
import { ResumeInfoContext } from '@/contexts/ResumeInfoProvider';
import React, { useContext } from 'react';
import SaveAndDeleteSection from '../SaveAndDeleteSection/SaveAndDeleteSection';
import { useDispatch } from 'react-redux';

const ResumeEditExperience = () => {
    const {experience, setExperience, setSectionCollapse} = useContext(ResumeInfoContext)
    const dispatch = useDispatch()
    const handleExperienceSection = () =>{
        setSectionCollapse('')
    }
    const removeExperienceSection = () =>{

        setExperience(null)
    }
    let experienceDetails = {...experience}
    return (
        <div className="mt-4">
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-semibold text-purple-800 capitalize">enter your latest education</h2>
        <div className="flex flex-col space-y-2">
          <label className="text-purple-800 font-semibold">Job Title</label>
          <input
            type="text"
            name="degree"
            defaultValue={experience?.title}
            onChange={(event) => {
                const title = event.target.value;
                experienceDetails.title = title;
                console.log(experienceDetails);
                setExperience(experienceDetails);
            }}
            className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
            placeholder="Enter your degree"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-purple-800 font-semibold">Company</label>
          <input
            type="text"
            name="school"
            defaultValue={experience?.company}
            onChange={(event) => {
                const company = event.target.value;
                experienceDetails.company = company;
                console.log(experienceDetails);
                setExperience(experienceDetails);
            }}
            className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
            placeholder="Enter school name"
          />
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            {/* city */}
            <div className="flex flex-col space-y-2 w-full md:w-1/2">
          <label className="text-purple-800 font-semibold">City</label>
          <input
            type="text"
            name="city"
            defaultValue={experience?.city}
            onChange={(event) => {
                const city = event.target.value;
                experienceDetails.city = city;
                console.log(experienceDetails);
                setExperience(experienceDetails);
            }}
            className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
            placeholder="Enter your city"
          />
        </div>
        {/* country */}
        <div className="flex flex-col space-y-2 w-full md:w-1/2">
          <label className="text-purple-800 font-semibold">Country</label>
          <input
            type="text"
            name="country"
            defaultValue={experience?.country}
            onChange={(event) => {
                const country = event.target.value;
                experienceDetails.country = country;
                console.log(experienceDetails);
                setExperience(experienceDetails);
            }}
            className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
            placeholder="Enter your country"
          />
        </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            {/* start date */}
            <div className="flex flex-col space-y-2 w-full md:w-1/2">
          <label className="text-purple-800 font-semibold">Start Date</label>
          <input
            type="date"
            name="startDate"
            defaultValue={experience?.startDate}
            onChange={(event) => {
                const startDate = event.target.value;
                experienceDetails.startDate = startDate;
                console.log(experienceDetails);
                setExperience(experienceDetails);
            }}
            className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
            
          />
        </div>
        {/* end date */}
        <div className="flex flex-col space-y-2 w-full md:w-1/2">
          <label className="text-purple-800 font-semibold">End Date</label>
          <input
            type="date"
            name="endDate"
            defaultValue={experience?.endDate}
            onChange={(event) => {
                const endDate = event.target.value;
                experienceDetails.endDate = endDate;
                console.log(experienceDetails);
                setExperience(experienceDetails);
            }}
            className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
            
          />
        </div>
        </div>
      </div>
      <SaveAndDeleteSection handleSave={handleExperienceSection} handleRemove={removeExperienceSection} />
    </div>
    );
};

export default ResumeEditExperience;