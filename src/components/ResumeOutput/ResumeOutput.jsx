import { ResumeInfoContext } from "@/contexts/ResumeInfoProvider";
import React, { useContext } from "react";
import { MdEmail, MdCall } from "react-icons/md";
import { FaLocationDot, FaLink } from "react-icons/fa6";
import { FaGithub, FaDribbble, FaLinkedinIn, FaBehance } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useSelector } from "react-redux";
import Experience from "../Outputs/Experience";
import Education from "../Outputs/Education";
import Skills from "../Outputs/Skills";
import Language from "../Outputs/Language";
import Certificate from "../Outputs/Certificate";
import Interest from "../Outputs/Interest";
import Project from "../Outputs/Project";
import Course from "../Outputs/Course";
import Award from "../Outputs/Award";
import Organization from "../Outputs/Organization";
import Publication from "../Outputs/Publication";
import Declaration from "../Outputs/Declaration";
import Reference from "../Outputs/Reference";
import Custom from "../Outputs/Custom";


const ResumeOutput = () => {
  const {} = useContext(ResumeInfoContext);
  // console.log(socialLinks)
  // console.log(profileSection);
  const { profile, experiences, skills, educations, languages, certificates, interests, projects, courses, awards, organizations, publications, references,declaration, custom } = useSelector(
    (state) => state
  );
  // console.log(experiences)
  return (
    <div className="p-8">
      {/* Personal Info */}
      <div>
        <h2
          className={`text-2xl text-zinc-800 text-center font-bold capitalize`}
        >
          {profile?.fullName}
        </h2>
        <h2 className={`text-xl text-zinc-800 text-center capitalize`}>
          {profile?.jobTitle}
        </h2>
        <div className="flex flex-row items-center justify-center space-x-3 mt-2">
          {profile?.email && (
            <div className="flex flex-row items-center space-x-2">
              <MdEmail className="text-zinc-800" />
              <p className="text-zinc-800">{profile?.email}</p>
            </div>
          )}
          {profile?.phone && (
            <div className="flex flex-row items-center space-x-2">
              <MdCall className="text-zinc-800" />
              <p className="text-zinc-800">{profile?.phone}</p>
            </div>
          )}
          {profile?.address && (
            <div className="flex flex-row  items-center space-x-2">
              <FaLocationDot className="text-zinc-800" />
              <p className="text-zinc-800">{profile?.address}</p>
            </div>
          )}
        </div>
        {profile?.socialLinks && (
          <div className="flex flex-col items-center mt-2">
            <div
              className={`grid gap-x-2 gap-y-1 ${
                profile?.socialLinks.length > 3
                  ? "grid-cols-3"
                  : `grid-cols-${profile?.socialLinks.length} place-content-center`
              }`}
            >
              {profile?.socialLinks?.map((link) => (
                <div
                  key={link?.id}
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
      {profile?.description && (
        <div className="mt-2 space-y-1">
          <h3 className="font-semibold text-zinc-800 border-b-2 border-b-slate-800">
            Profile
          </h3>
          <p className="mt-1 text-slate-800 text-justify">
            {profile?.description}
          </p>
        </div>
      )}
      {experiences[0] && (
        <div className="mt-2 flex flex-col space-y-2">
          <h3 className="font-semibold text-zinc-800 border-b-2 border-b-slate-800">
            Experience
          </h3>
          {experiences?.map((experience) => (
            <Experience key={experience?.id} experience={experience} />
          ))}
        </div>
      )}
      {skills.expertise && (
        <div className="mt-2 flex flex-col space-y-2">
          <h3 className="font-semibold text-zinc-800 border-b-2 border-b-slate-800">
            Skills
          </h3>
          <Skills skills={skills} />
          {/* {
            experiences?.map((experience) => <Experience key={experience?.id} experience={experience}/>)
          } */}
        </div>
      )}
      {projects[0] && (
        <div className="mt-2 space-y-1">
          <h3 className="font-semibold text-zinc-800 border-b-2 border-b-slate-800">
            Projects
          </h3>
          {projects?.map((project) => (
            <Project key={project?.id} project={project} />
          ))}
        </div>
      )}
      {educations[0] && (
        <div className="mt-2 space-y-1">
          <h3 className="font-semibold text-zinc-800 border-b-2 border-b-slate-800">
            Education
          </h3>
          {educations?.map((education) => (
            <Education key={education?.id} education={education} />
          ))}
        </div>
      )}
      {publications[0] && (
        <div className="mt-2 space-y-1">
          <h3 className="font-semibold text-zinc-800 border-b-2 border-b-slate-800">
            Publications
          </h3>
          {publications?.map((publication) => (
            <Publication key={publication?.id} publication={publication} />
          ))}
        </div>
      )}
      {organizations[0] && (
        <div className="mt-2 flex flex-col space-y-2">
          <h3 className="font-semibold text-zinc-800 border-b-2 border-b-slate-800">
          Organizations
          </h3>
          {organizations?.map((organization) => (
            <Organization key={organization?.id} org={organization} />
          ))}
        </div>
      )}
      {certificates[0] && (
        <div className="mt-2 flex flex-col space-y-2">
          <h3 className="font-semibold text-zinc-800 border-b-2 border-b-slate-800">
            Certificates
          </h3>
          {certificates?.map((certificate) => (
            <Certificate key={certificate?.id} certificate={certificate} />
          ))}
        </div>
      )}
      {courses[0] && (
        <div className="mt-2 flex flex-col space-y-2">
          <h3 className="font-semibold text-zinc-800 border-b-2 border-b-slate-800">
            Courses
          </h3>
          {courses?.map((course) => (
            <Course key={course?.id} course={course} />
          ))}
        </div>
      )}
      {awards[0] && (
        <div className="mt-2 flex flex-col space-y-2">
          <h3 className="font-semibold text-zinc-800 border-b-2 border-b-slate-800">
            Awards
          </h3>
          {awards?.map((award) => (
            <Award key={award?.id} award={award} />
          ))}
        </div>
      )}
      {languages[0] && (
        <div className="mt-2 flex flex-col space-y-2">
          <h3 className="font-semibold text-zinc-800 border-b-2 border-b-slate-800">
            Language
          </h3>
          <ul className="list-disc text-zinc-800 pl-4">
          {languages?.map((language) => (
            <li  key={language?.id}><Language language={language} /></li>
          ))}
          </ul>
        </div>
      )}
      {interests[0] && (
        <div className="mt-2 flex flex-col space-y-2">
          <h3 className="font-semibold text-zinc-800 border-b-2 border-b-slate-800">
            Interests
          </h3>
          <ul className="list-disc text-zinc-800 pl-4">
          {interests?.map((interest) => (
            <li  key={interest?.id}><Interest interest={interest} /></li>
          ))}
          </ul>
        </div>
      )}
      {references[0] && (
        <div className="mt-2 flex flex-col space-y-2">
          <h3 className="font-semibold text-zinc-800 border-b-2 border-b-slate-800">
            References
          </h3>
          {references?.map((reference) => (
            <Reference key={reference?.id} reference={reference} />
          ))}
        </div>
      )}
      {custom?.name && (
        <div className="mt-2 flex flex-col space-y-2">
          <h3 className="font-semibold text-zinc-800 border-b-2 border-b-slate-800">
            {custom?.name}
          </h3>
          {custom?.sections[0] && (
            custom?.sections?.map((custom) => (
              <Custom key={custom?.id} custom={custom} />
            ))
          )}
        </div>
      )}
      {
        (declaration.description || declaration.name || declaration.address || declaration.date || declaration.image) && (
          <div className="mt-2 flex flex-col space-y-2">
          <h3 className="font-semibold text-zinc-800 border-b-2 border-b-slate-800">
            Declaration
          </h3>
            <Declaration  declaration={declaration} />
        </div>
        )
      }
    </div>
  );
};

export default ResumeOutput;
