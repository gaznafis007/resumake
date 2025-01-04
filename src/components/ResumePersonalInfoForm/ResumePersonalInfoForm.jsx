import React, { useContext } from "react";
import DefaultButton from "../DefaultButton/DefaultButton";
import { ResumeInfoContext } from "@/contexts/ResumeInfoProvider";
import { FaPlus } from "react-icons/fa";

const ResumePersonalInfoForm = () => {
  const {
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
    setEditSection,
  } = useContext(ResumeInfoContext);
  const handlePersonalInfo = () => {
    setEditSection("");
  };
  return (
    <>
      <h2 className="text-2xl text-purple-800 font-bold">
        Enter Your Personal Infos
      </h2>
      <form className="mt-4 md:mt-8 space-y-4 text-purple-600">
        <div className="flex flex-col space-y-2">
          <label className="font-semibold text-purple-800 capitalize">
            full name
          </label>
          <input
            type="text"
            name="name"
            defaultValue={fullName}
            onChange={(event) => setFullName(event.target.value)}
            className="border border-purple-800 rounded-lg p-2 bg-purple-100"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row space-x-2">
            <label className="font-semibold text-purple-800 capitalize">
              job title
            </label>
            <label className="font-semibold text-purple-300 capitalize">
              (optional)
            </label>
          </div>
          <input
            type="text"
            name="jobTitle"
            defaultValue={jobTitle}
            onChange={(event) => setJobTitle(event.target.value)}
            className="border border-purple-800 rounded-lg p-2 bg-purple-100"
          />
        </div>
        <div className="flex flex-col md:flex-row md:space-x-3">
          <div className="flex flex-col space-y-2">
            <div className="flex flex-row space-x-2">
              <label className="font-semibold text-purple-800 capitalize">
                email
              </label>
              <label className="font-semibold text-purple-300 capitalize">
                (recommended)
              </label>
            </div>
            <input
              type="text"
              name="email"
              defaultValue={email}
              onChange={(event) => setEmail(event.target.value)}
              className="border border-purple-800 rounded-lg p-2 bg-purple-100"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex flex-row space-x-2">
              <label className="font-semibold text-purple-800 capitalize">
                phone number
              </label>
              <label className="font-semibold text-purple-300 capitalize">
                (recommended)
              </label>
            </div>
            <input
              type="text"
              name="phone"
              defaultValue={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="border border-purple-800 rounded-lg p-2 bg-purple-100"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row space-x-2">
            <label className="font-semibold text-purple-800 capitalize">
              address
            </label>
            <label className="font-semibold text-purple-300 capitalize">
              (recommended)
            </label>
          </div>
          <input
            type="text"
            name="address"
            defaultValue={address}
            onChange={(event) => setAddress(event.target.value)}
            className="border border-purple-800 rounded-lg p-2 bg-purple-100"
          />
        </div>
        <h2 className="text-2xl text-purple-800 font-bold mt-4">Links</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            <DefaultButton optionalStyle={'bg-purple-100 hover:bg-purple-200 px-2 py-2'}>
                <div className="flex flex-row space-x-1 items-center text-purple-800 text-sm">
                    <FaPlus />
                    <p>website</p>
                </div>
            </DefaultButton>
            <DefaultButton optionalStyle={'bg-purple-100 hover:bg-purple-200 px-2 py-2'}>
                <div className="flex flex-row space-x-1 items-center text-purple-800 text-sm">
                    <FaPlus />
                    <p>LinkedIn</p>
                </div>
            </DefaultButton>
            <DefaultButton optionalStyle={'bg-purple-100 hover:bg-purple-200 px-2 py-2'}>
                <div className="flex flex-row space-x-1 items-center text-purple-800 text-sm">
                    <FaPlus />
                    <p>GitHub</p>
                </div>
            </DefaultButton>
            <DefaultButton optionalStyle={'bg-purple-100 hover:bg-purple-200 px-2 py-2'}>
                <div className="flex flex-row space-x-1 items-center text-purple-800 text-sm">
                    <FaPlus />
                    <p>Dribble</p>
                </div>
            </DefaultButton>
            <DefaultButton optionalStyle={'bg-purple-100 hover:bg-purple-200 px-2 py-2'}>
                <div className="flex flex-row space-x-1 items-center text-purple-800 text-sm">
                    <FaPlus />
                    <p>Leetcode</p>
                </div>
            </DefaultButton>
            <DefaultButton optionalStyle={'bg-purple-100 hover:bg-purple-200 px-2 py-2'}>
                <div className="flex flex-row space-x-1 items-center text-purple-800 text-sm">
                    <FaPlus />
                    <p>Behance</p>
                </div>
            </DefaultButton>
        </div>
        <DefaultButton handler={handlePersonalInfo}>Save</DefaultButton>
      </form>
    </>
  );
};

export default ResumePersonalInfoForm;
