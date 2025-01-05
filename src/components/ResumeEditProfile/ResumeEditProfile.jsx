import { ResumeInfoContext } from "@/contexts/ResumeInfoProvider";
import React, { useContext } from "react";
import DefaultButton from "../DefaultButton/DefaultButton";
import Button from "../Button/Button";
import { FaTrash } from "react-icons/fa";

const ResumeEditProfile = () => {
  const { profileSection, setProfileSection, setSectionCollapse } = useContext(ResumeInfoContext);
  const removeProfileSection = () =>{
    setProfileSection(null);
  }
  const handleProfileSection = () =>{
    setSectionCollapse('')
  }
  const handleProfileSummary = (event) => {
    const summary = event.target.value;
    console.log(summary);
    let newProfile = {
      description: summary,
    };
    setProfileSection(newProfile);
  };
  return (
    <div className="text-purple-800 mt-3">
      <h2 className="text-2xl font-semibold">Edit profile</h2>
      <div className="mt-4 flex flex-col space-y-1">
        <h3 className="font-semibold">Profile Summary</h3>
        <textarea
          onChange={(event) => handleProfileSummary(event)}
          defaultValue={profileSection?.description}
          className="border border-purple-800 bg-purple-100 p-4 rounded-md"
          placeholder="Write a short summary about yourself"
        ></textarea>
      </div>
        <div className="flex flex-row justify-end items-center space-x-2 mt-2">
        <DefaultButton handler={handleProfileSection} optionalStyle={'mt-2'}>Save</DefaultButton>
        <Button handler={removeProfileSection} style={'bg-red-100 hover:bg-red-200 text-red-600 px-6 py-3 rounded-md'}><FaTrash/></Button>
        </div>
    </div>
  );
};

export default ResumeEditProfile;
