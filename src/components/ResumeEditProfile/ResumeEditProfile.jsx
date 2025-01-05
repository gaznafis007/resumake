import { ResumeInfoContext } from "@/contexts/ResumeInfoProvider";
import React, { useContext } from "react";

const ResumeEditProfile = () => {
  const { profileSection, setProfileSection } = useContext(ResumeInfoContext);
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
          className="border border-purple-800 bg-purple-100 p-4 rounded-md"
          placeholder="Write a short summary about yourself"
        ></textarea>
      </div>
    </div>
  );
};

export default ResumeEditProfile;
