import React, { useContext, useState } from "react";
import DefaultButton from "../DefaultButton/DefaultButton";
import { ResumeInfoContext } from "@/contexts/ResumeInfoProvider";
import { FaPlus, FaTrash } from "react-icons/fa";
import Button from "../Button/Button";

const ResumePersonalInfoForm = () => {
  const {
    fullName,
    jobTitle,
    email,
    phone,
    address,
    socialLinks,
    setFullName,
    setJobTitle,
    setEmail,
    setPhone,
    setAddress,
    setEditSection,
    setSocialLinks,
  } = useContext(ResumeInfoContext);
  let newSocialLinks = [...socialLinks];
  const socials = [
    "Website",
    "LinkedIn",
    "GitHub",
    "Dribble",
    "Leetcode",
    "Behance",
  ];
  const [activeSocials, setActiveSocials] = useState([]);
  const handleRemoveFromActiveSocials = (linkName) =>{
    const updatedActiveSocial = activeSocials.filter(link => link != linkName?.name);
    const updatedSocialLinks = newSocialLinks.filter(link => link?.name != linkName?.name);
    console.log(updatedActiveSocial)
    setActiveSocials(updatedActiveSocial);
    setSocialLinks(updatedSocialLinks);
  }
  const handlePersonalInfo = (params) => {
    setEditSection("");
  };
  const handleSocialLinkActivation = (linkType) => {
    // console.log(socialLinks, 'before')
    if (!activeSocials.includes(linkType)) {
      const link = {};
      link.name = linkType;
      newSocialLinks = [...socialLinks, link];
      setActiveSocials([...activeSocials, linkType])
      setSocialLinks(newSocialLinks);
    }
    // console.log(socialLinks, 'after')
  };
  return (
    <>
      <h2 className="text-2xl text-purple-800 font-bold">
        Enter Your Personal Infos
      </h2>
      <div className="mt-4 md:mt-8 space-y-4 text-purple-600">
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
        <div className="mt-4 flex flex-col space-y-2">
            {
                activeSocials. length > 0 && (
                    newSocialLinks?.map((link, idx) => (
                        <div key={idx} className="flex flex-col space-y-2">
                        <div className="flex flex-row space-x-2 justify-between items-center">
                          <div className="space-x-1">
                          <label className="font-semibold text-purple-800 capitalize">
                            {link?.name}
                          </label>
                          <label className="font-semibold text-purple-300 capitalize">
                            (optional)
                          </label>
                          </div>
                          <Button handler={handleRemoveFromActiveSocials} params={link} style={'text-red-500 bg-red-100 hover:bg-red-200 p-2 rounded-md'}><FaTrash/></Button>
                        </div>
                        <input
                          type="text"
                          name={link?.name}
                          defaultValue={link?.username}
                          placeholder="Enter username"
                          onChange={(event) => setAddress(event.target.value)}
                          className="border border-purple-800 rounded-lg p-2 bg-purple-100"
                        />
                        <input
                          type="text"
                          name={link?.name}
                          defaultValue={link?.url}
                          onChange={(event) => setAddress(event.target.value)}
                          placeholder="Enter Url"
                          className="border border-purple-800 rounded-lg p-2 bg-purple-100"
                        />
                      </div>
                    ))
                )
            }
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {socials?.map(
            (social, idx) =>
              !activeSocials.includes(social) && (
                <Button
                  key={idx}
                  handler={handleSocialLinkActivation}
                  params={social}
                  style={` bg-purple-100 hover:bg-purple-200 px-2 py-2 rounded-md`}
                >
                  <div className="flex flex-row space-x-1 items-center text-purple-800 text-sm">
                    <FaPlus />
                    <p>{social}</p>
                  </div>
                </Button>
              )
          )}
        </div>
        <DefaultButton handler={handlePersonalInfo}>Save</DefaultButton>
      </div>
    </>
  );
};

export default ResumePersonalInfoForm;
