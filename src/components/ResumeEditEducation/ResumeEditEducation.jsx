import { ResumeInfoContext } from "@/contexts/ResumeInfoProvider";
import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import Button from "../Button/Button";
import DefaultButton from "../DefaultButton/DefaultButton";
import SaveAndDeleteSection from "../SaveAndDeleteSection/SaveAndDeleteSection";

const ResumeEditEducation = () => {
    const {educationSection, setEducationSection, setSectionCollapse} = useContext(ResumeInfoContext)
    let educationDetails ={...educationSection}
    const handleEducationSection = () =>{
        setSectionCollapse('')
    }
    const removeEducationSection = () =>{

        setEducationSection(null)
    }
  return (
    <div className="mt-4">
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-semibold text-purple-800 capitalize">enter your latest education</h2>
        <div className="flex flex-col space-y-2">
          <label className="text-purple-800 font-semibold">Degree</label>
          <input
            type="text"
            name="degree"
            defaultValue={educationSection?.degree}
            onChange={(event) => {
                const degreeName = event.target.value;
                educationDetails.degree = degreeName;
                console.log(educationDetails);
                setEducationSection(educationDetails);
            }}
            className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
            placeholder="Enter your degree"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-purple-800 font-semibold">School</label>
          <input
            type="text"
            name="school"
            defaultValue={educationSection?.school}
            onChange={(event) => {
                const degreeName = event.target.value;
                educationDetails.school = degreeName;
                console.log(educationDetails);
                setEducationSection(educationDetails);
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
            defaultValue={educationSection?.city}
            onChange={(event) => {
                const degreeName = event.target.value;
                educationDetails.city = degreeName;
                console.log(educationDetails);
                setEducationSection(educationDetails);
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
            defaultValue={educationSection?.country}
            onChange={(event) => {
                const degreeName = event.target.value;
                educationDetails.country = degreeName;
                console.log(educationDetails);
                setEducationSection(educationDetails);
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
            defaultValue={educationSection?.startDate}
            onChange={(event) => {
                const degreeName = event.target.value;
                educationDetails.startDate = degreeName;
                console.log(educationDetails);
                setEducationSection(educationDetails);
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
            defaultValue={educationSection?.endDate}
            onChange={(event) => {
                const degreeName = event.target.value;
                educationDetails.endDate = degreeName;
                console.log(educationDetails);
                setEducationSection(educationDetails);
            }}
            className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
            
          />
        </div>
        </div>
      </div>
      <SaveAndDeleteSection handleSave={handleEducationSection} handleRemove={removeEducationSection} />
    </div>
  );
};

export default ResumeEditEducation;
