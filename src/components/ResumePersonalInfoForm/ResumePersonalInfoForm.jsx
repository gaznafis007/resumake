import React, { useContext, useState } from "react";
import DefaultButton from "../DefaultButton/DefaultButton";
import { ResumeInfoContext } from "@/contexts/ResumeInfoProvider";
import { FaPlus, FaTrash } from "react-icons/fa";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSocialLink,
  updateProfile,
  updateSocialLink,
  updateSocialLinkUsernameAndUrl,
} from "@/redux/features/profileSlice";

const ResumePersonalInfoForm = () => {
  const { setEditSection } = useContext(ResumeInfoContext);
  const profile = useSelector((state) => state.profile);
  // let newSocialLinks = [...profile?.socialLinks];
  // console.log(profile?.socialLinks, 'socials')
  const dispatch = useDispatch();
  const socials = [
    "Website",
    "LinkedIn",
    "GitHub",
    "Dribble",
    "Leetcode",
    "Behance",
  ];
  const [activeSocials, setActiveSocials] = useState([]);
  const handleRemoveFromActiveSocials = (linkName) => {
    const updatedActiveSocial = activeSocials.filter(
      (link) => link != linkName?.name
    );
    setActiveSocials(updatedActiveSocial);
    dispatch(removeSocialLink(linkName?.id));
    profile?.socialLinks;
  };
  const handlePersonalInfo = (params) => {
    setEditSection("");
  };
  const handleSocialLinkActivation = (linkType) => {
    // console.log(socialLinks, 'before')
    if (!activeSocials.includes(linkType)) {
      dispatch(updateSocialLink(linkType));
      const link = {};
      link.name = linkType;
      setActiveSocials([...activeSocials, linkType]);
    }
    // console.log(socialLinks, 'after')
  };
  const handleSocialLinkUsername = (id, field, value) => {
    // console.log(id, value);
    dispatch(updateSocialLinkUsernameAndUrl({ id, field, value }));
    // const username = event.target.value;
    // const updatedSocialLinks = socialLinks?.map((social, idx , links) => {
    //     if(social?.name == link) {
    //         const excludedLinks = links.filter(match => match?.name != link);
    //         console.log(excludedLinks)
    //         const valid = {
    //             ...social,
    //             username
    //         }
    //         const updated = [...excludedLinks, valid];
    //         console.log(updated, "this is valid")
    //         return updated
    //         return {...social, username}
    //     }
    //     else{
    //         return
    //     }
    // })
    // console.log(updatedSocialLinks)
    // const updated = updatedSocialLinks.filter(item => item != undefined);
    // const updatedLinks = [...updated[0]];
    // console.log(updatedLinks, "watching")
    // setSocialLinks(updatedLinks)
  };
  const handleSocialLinkUrl = (id, field, value) => {
    dispatch(updateSocialLinkUsernameAndUrl({ id, field, value }));
    //   const url = event.target.value;
    //   const updatedSocialLinks = socialLinks?.map((social, idx , links) => {
    //       if(social?.name == link) {
    //           const excludedLinks = links.filter(match => match?.name != link);
    //           console.log(excludedLinks)
    //           const valid = {
    //               ...social,
    //               url
    //           }
    //           const updated = [...excludedLinks, valid];
    //           console.log(updated, "this is valid")
    //           return updated
    //           return {...social, username}
    //       }
    //       else{
    //           return
    //       }
    // })
    //   console.log(updatedSocialLinks)
    //   const updated = updatedSocialLinks.filter(item => item != undefined);
    //   const updatedLinks = [...updated[0]];
    //   console.log(updatedLinks, "watching")
    //   setSocialLinks(updatedLinks)
  };
  const handleUpdateProfile = (field, value) => {
    dispatch(updateProfile({ field, value }));
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
            defaultValue={profile?.fullName}
            onChange={(event) =>
              handleUpdateProfile("fullName", event.target.value)
            }
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
            defaultValue={profile?.jobTitle}
            onChange={(event) =>
              handleUpdateProfile("jobTitle", event.target.value)
            }
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
              defaultValue={profile?.email}
              onChange={(event) =>
                handleUpdateProfile("email", event.target.value)
              }
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
              defaultValue={profile?.phone}
              onChange={(event) =>
                handleUpdateProfile("phone", event.target.value)
              }
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
            defaultValue={profile?.address}
            onChange={(event) =>
              handleUpdateProfile("address", event.target.value)
            }
            className="border border-purple-800 rounded-lg p-2 bg-purple-100"
          />
        </div>
        <h2 className="text-2xl text-purple-800 font-bold mt-4">Links</h2>
        <div className="mt-4 flex flex-col space-y-2">
          {activeSocials.length > 0 &&
            profile?.socialLinks?.map((link) => (
              <div key={link?.id} className="flex flex-col space-y-2">
                <div className="flex flex-row space-x-2 justify-between items-center">
                  <div className="space-x-1">
                    <label className="font-semibold text-purple-800 capitalize">
                      {link?.name}
                    </label>
                    <label className="font-semibold text-purple-300 capitalize">
                      (optional)
                    </label>
                  </div>
                  <Button
                    handler={handleRemoveFromActiveSocials}
                    params={link}
                    style={
                      "text-red-500 bg-red-100 hover:bg-red-200 p-2 rounded-md"
                    }
                  >
                    <FaTrash />
                  </Button>
                </div>
                <input
                  type="text"
                  name={link?.name}
                  defaultValue={link?.username}
                  placeholder="Enter username"
                  onChange={(event) =>
                    handleSocialLinkUsername(
                      link?.id,
                      "username",
                      event.target.value
                    )
                  }
                  className="border border-purple-800 rounded-lg p-2 bg-purple-100"
                />
                <input
                  type="text"
                  name={link?.name}
                  defaultValue={link?.url}
                  onChange={(event) =>
                    handleSocialLinkUrl(link?.id, "url", event.target.value)
                  }
                  placeholder="Enter Url"
                  className="border border-purple-800 rounded-lg p-2 bg-purple-100"
                />
              </div>
            ))}
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
