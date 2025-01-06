import { ResumeInfoContext } from "@/contexts/ResumeInfoProvider";
import React, { useContext } from "react";
import { MdEmail, MdCall } from "react-icons/md";
import { FaLocationDot, FaLink } from "react-icons/fa6";
import { FaGithub, FaDribbble, FaLinkedinIn, FaBehance } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const ResumeOutput = () => {
  const {
    fullName,
    jobTitle,
    email,
    phone,
    address,
    socialLinks,
    profileSection,
    educationSection
  } = useContext(ResumeInfoContext);
  // console.log(socialLinks)
  console.log(profileSection);
  return (
    <div className="p-8">
      {/* Personal Info */}
      <div>
        <h2
          className={`text-2xl text-zinc-800 text-center font-bold capitalize`}
        >
          {fullName}
        </h2>
        <h2 className={`text-xl text-zinc-800 text-center capitalize`}>
          {jobTitle}
        </h2>
        <div className="flex flex-row items-center justify-center space-x-3 mt-2">
          {email && (
            <div className="flex flex-row items-center space-x-2">
              <MdEmail className="text-zinc-800" />
              <p className="text-zinc-800">{email}</p>
            </div>
          )}
          {phone && (
            <div className="flex flex-row items-center space-x-2">
              <MdCall className="text-zinc-800" />
              <p className="text-zinc-800">{phone}</p>
            </div>
          )}
          {address && (
            <div className="flex flex-row  items-center space-x-2">
              <FaLocationDot className="text-zinc-800" />
              <p className="text-zinc-800">{address}</p>
            </div>
          )}
        </div>
        {socialLinks && (
          <div className="flex flex-col items-center mt-2">
            <div
              className={`grid gap-x-2 gap-y-1 ${
                socialLinks.length > 3
                  ? "grid-cols-3"
                  : `grid-cols-${socialLinks.length} place-content-center`
              }`}
            >
              {socialLinks?.map((link, idx) => (
                <div
                  key={idx}
                  className="flex flex-row  items-center space-x-2"
                >
                  {link?.name == "Website" && (
                    <FaLink className="text-zinc-800" />
                  )}
                  {link?.name == "GitHub" && (
                    <FaGithub className="text-zinc-800" />
                  )}
                  {link?.name == "LinkedIn" && (
                    <FaLinkedinIn className="text-zinc-800" />
                  )}
                  {link?.name == "Dribble" && (
                    <FaDribbble className="text-zinc-800" />
                  )}
                  {link?.name == "Behance" && (
                    <FaBehance className="text-zinc-800" />
                  )}
                  {link?.name == "Leetcode" && (
                    <SiLeetcode className="text-zinc-800" />
                  )}
                  <a href={link?.url} className="text-zinc-800">
                    {link?.username}
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* profile */}
      {profileSection && (
        <div className="mt-2 space-y-1">
          <h3 className="font-semibold text-zinc-800 border-b-2 border-b-slate-800">
            Profile
          </h3>
          <p className="mt-1 text-slate-800 text-justify">{profileSection?.description}</p>
        </div>
      )}
      {educationSection && (
        <div className="mt-2 space-y-1">
          <h3 className="font-semibold text-zinc-800 border-b-2 border-b-slate-800">
            Education
          </h3>
          <div className="flex flex-row justify-between">
            <p className="text-zinc-800 text-sm">
              <span className="font-bold">{educationSection?.degree}</span>{educationSection?.school && <span className="font-thin"><i>, {educationSection?.school}</i></span>}
            </p>
            <div className="flex flex-col space-y-1 text-zinc-800 items-end">
              {
                (educationSection?.startDate || educationSection?.endDate) && (
                  <p className="text-sm">
                    {educationSection?.startDate} - {educationSection?.endDate}
                  </p>
                )
              }
              {
                (educationSection?.city || educationSection?.country) && (
                  <p className="text-sm">
                    <span>{educationSection?.city}</span>{educationSection?.country && <span className="font-thin">, {educationSection?.country}</span>}
                  </p>
                )
              }
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeOutput;
