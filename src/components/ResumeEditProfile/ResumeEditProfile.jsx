import { ResumeInfoContext } from "@/contexts/ResumeInfoProvider";
import React, { useContext } from "react";
import DefaultButton from "../DefaultButton/DefaultButton";
import Button from "../Button/Button";
import { FaTrash } from "react-icons/fa";
import SaveAndDeleteSection from "../SaveAndDeleteSection/SaveAndDeleteSection";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "@/redux/features/profileSlice";

const ResumeEditProfile = () => {
  const { profileSection, setProfileSection, setSectionCollapse } = useContext(ResumeInfoContext);
  const profile = useSelector((state) => state.profile)
  const dispatch = useDispatch()
  const removeProfileSection = () =>{
    let field = 'description';
    let value = 'acs'
    dispatch(updateProfile({field, value}))
    setProfileSection(null);
  }
  const handleProfileSection = () =>{
    setSectionCollapse('')
  }
  const handleProfileSummary = (field, value) => {
    dispatch(updateProfile({field, value}))
    // const summary = event.target.value;
    // console.log(summary);
    // let newProfile = {
    //   description: summary,
    // };
    // setProfileSection(newProfile);
  };
  return (
    <div className="text-purple-800 mt-3">
      <h2 className="text-2xl font-semibold">Edit profile</h2>
      <div className="mt-4 flex flex-col space-y-1">
        <h3 className="font-semibold">Profile Summary</h3>
        <textarea
          onChange={(event) => handleProfileSummary('description', event.target.value)}
          defaultValue={profile?.description}
          className="border border-purple-800 bg-purple-100 p-4 rounded-md"
          placeholder="Write a short summary about yourself"
        ></textarea>
      </div>
      <SaveAndDeleteSection handleSave={handleProfileSection} handleRemove={removeProfileSection} />
    </div>
  );
};

export default ResumeEditProfile;
