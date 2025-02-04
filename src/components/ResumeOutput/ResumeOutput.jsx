import { ResumeInfoContext } from "@/contexts/ResumeInfoProvider";
import React, { useContext, useEffect, useRef } from "react";
import { MdEmail, MdCall } from "react-icons/md";
import { FaLocationDot, FaLink } from "react-icons/fa6";
import { FaGithub, FaDribbble, FaLinkedinIn, FaBehance } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
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
import jsPDF from "jspdf";
import { downloadPdf } from "@/redux/features/pdfSlice";
import html2canvas from "html2canvas";


const ResumeOutput = () => {
  const {} = useContext(ResumeInfoContext);
  const resumeRef = useRef()
  const dispatch = useDispatch()
  // console.log(socialLinks)
  // console.log(profileSection);
  const { profile, experiences, skills, educations, languages, certificates, interests, projects, courses, awards, organizations, publications, references,declaration, custom, pdf, style } = useSelector(
    (state) => state
  );
  const generatePdf = () =>{
    const input = resumeRef.current;

    html2canvas(input, {
      scale: 5, // Higher scale for better resolution
      useCORS: true, // Enables cross-origin resource sharing for images
      allowTaint: true,
    })
    .then((canvas) =>{
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${profile?.fullName ? profile?.fullName : 'Resume'}.pdf`)
    })
  }
  // const generatePdf = () =>{
  //   if(resumeRef.current){
  //     const newPdf = new jsPDF();
  //     newPdf.html(resumeRef.current, {
  //       callback: (doc) =>{
  //         doc.save(`${profile?.fullName ? profile?.fullName : 'Resume'}.pdf`)
  //       },
  //       x: 0,
  //       y: 0,
  //       // autoPaging: 'text',
  //       // html2canvas: {
  //       //   scale: 3
  //       // },
  //       width: 190,
  //       windowWidth: resumeRef.current.scrollWidth
  //     })
  //   }
  //   }
  useEffect(() =>{
    if(pdf.triggerDownload){
      generatePdf()
      dispatch(downloadPdf({status:false}))
    }
  }, [pdf.triggerDownload])

  // console.log(experiences)
  return (
    <div ref={resumeRef} className={`p-8 text-${style?.color}`}>
      {/* Personal Info */}
      <div>
        <h2
          className={`text-2xl ${style?.color?.text ? style?.color?.text : 'text-zinc-800'} text-center font-bold capitalize`}
        >
          {profile?.fullName}
        </h2>
        <h2 className={`text-xl ${style?.color?.text ? style?.color?.text : 'text-zinc-800'} text-center capitalize`}>
          {profile?.jobTitle}
        </h2>
        <div className="flex flex-row items-center justify-center space-x-3 mt-2">
          {profile?.email && (
            <div className="flex flex-row items-center space-x-2">
              <MdEmail className={`${style?.color?.text ? style?.color?.text : 'text-zinc-800'}`}/>
              <p className={`${style?.color?.text ? style?.color?.text : 'text-zinc-800'}`}>{profile?.email}</p>
            </div>
          )}
          {profile?.phone && (
            <div className="flex flex-row items-center space-x-2">
              <MdCall className={`${style?.color?.text ? style?.color?.text : 'text-zinc-800'}`} />
              <p className={`${style?.color?.text ? style?.color?.text : 'text-zinc-800'}`}>{profile?.phone}</p>
            </div>
          )}
          {profile?.address && (
            <div className="flex flex-row  items-center space-x-2">
              <FaLocationDot className={`${style?.color?.text ? style?.color?.text : 'text-zinc-800'}`} />
              <p className={`${style?.color?.text ? style?.color?.text : 'text-zinc-800'}`}>{profile?.address}</p>
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
                  className={`flex flex-row  items-center space-x-2 ${style?.color?.text ? style?.color?.text : 'text-zinc-800'}`}
                >
                  {link?.name == "Website" && (
                    <FaLink className={`${style?.color?.text ? style?.color?.text : 'text-zinc-800'}`} />
                  )}
                  {link?.name == "GitHub" && (
                    <FaGithub className={`${style?.color?.text ? style?.color?.text : 'text-zinc-800'}`} />
                  )}
                  {link?.name == "LinkedIn" && (
                    <FaLinkedinIn className={`${style?.color?.text ? style?.color?.text : 'text-zinc-800'}`} />
                  )}
                  {link?.name == "Dribble" && (
                    <FaDribbble className="text-zinc-800" />
                  )}
                  {link?.name == "Behance" && (
                    <FaBehance className={`${style?.color?.text ? style?.color?.text : 'text-zinc-800'}`} />
                  )}
                  {link?.name == "Leetcode" && (
                    <SiLeetcode className={`${style?.color?.text ? style?.color?.text : 'text-zinc-800'}`} />
                  )}
                  <a href={link?.url} className={`${style?.color?.text ? style?.color?.text : 'text-zinc-800'}`}>
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
          <h3 className={`font-semibold pb-2 ${style?.color?.text ? style?.color?.text : 'text-zinc-800'} border-b-2 border-b-slate-800`}>
            Profile
          </h3>
          <p className={`mt-1 ${style?.color?.text ? style?.color?.text : 'text-zinc-800'} text-justify`}>
            {profile?.description}
          </p>
        </div>
      )}
      {experiences[0] && (
        <div className="mt-2 flex flex-col space-y-2">
          <h3 className={`font-semibold pb-2 ${style?.color?.text ? style?.color?.text : 'text-zinc-800'} border-b-2 border-b-slate-800`}>
            Experience
          </h3>
          {experiences?.map((experience) => (
            <Experience key={experience?.id} experience={experience} />
          ))}
        </div>
      )}
      {skills.expertise && (
        <div className="mt-2 flex flex-col space-y-2">
          <h3 className={`font-semibold pb-2 ${style?.color?.text ? style?.color?.text : 'text-zinc-800'} border-b-2 border-b-slate-800`}>
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
          <h3 className={`font-semibold ${style?.color?.text ? style?.color?.text : 'text-zinc-800'} pb-2 border-b-2 border-b-slate-800`}>
            Projects
          </h3>
          {projects?.map((project) => (
            <Project key={project?.id} project={project} />
          ))}
        </div>
      )}
      {educations[0] && (
        <div className="mt-2 space-y-1">
          <h3 className="font-semibold pb-2 text-zinc-800 border-b-2 border-b-slate-800">
            Education
          </h3>
          {educations?.map((education) => (
            <Education key={education?.id} education={education} />
          ))}
        </div>
      )}
      {publications[0] && (
        <div className="mt-2 space-y-1">
          <h3 className="font-semibold pb-2 text-zinc-800 border-b-2 border-b-slate-800">
            Publications
          </h3>
          {publications?.map((publication) => (
            <Publication key={publication?.id} publication={publication} />
          ))}
        </div>
      )}
      {organizations[0] && (
        <div className="mt-2 flex flex-col space-y-2">
          <h3 className="font-semibold pb-2 text-zinc-800 border-b-2 border-b-slate-800">
          Organizations
          </h3>
          {organizations?.map((organization) => (
            <Organization key={organization?.id} org={organization} />
          ))}
        </div>
      )}
      {certificates[0] && (
        <div className="mt-2 flex flex-col space-y-2">
          <h3 className="font-semibold pb-2 text-zinc-800 border-b-2 border-b-slate-800">
            Certificates
          </h3>
          {certificates?.map((certificate) => (
            <Certificate key={certificate?.id} certificate={certificate} />
          ))}
        </div>
      )}
      {courses[0] && (
        <div className="mt-2 flex flex-col space-y-2">
          <h3 className="font-semibold pb-2 text-zinc-800 border-b-2 border-b-slate-800">
            Courses
          </h3>
          {courses?.map((course) => (
            <Course key={course?.id} course={course} />
          ))}
        </div>
      )}
      {awards[0] && (
        <div className="mt-2 flex flex-col space-y-2">
          <h3 className={`font-semibold pb-2 border-b-2 border-b-slate-800`}>
            Awards
          </h3>
          {awards?.map((award) => (
            <Award key={award?.id} award={award} style={style} />
          ))}
        </div>
      )}
      {languages[0] && (
        <div className="mt-2 flex flex-col space-y-2">
          <h3 className="font-semibold pb-2 text-zinc-800 border-b-2 border-b-slate-800">
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
          <h3 className="font-semibold pb-2 text-zinc-800 border-b-2 border-b-slate-800">
            Interests
          </h3>
          <ul className="list-disc text-zinc-800 pl-2">
          {interests?.map((interest) => (
            <li  key={interest?.id}><Interest interest={interest} /></li>
          ))}
          </ul>
        </div>
      )}
      {references[0] && (
        <div className="mt-2 flex flex-col space-y-2">
          <h3 className="font-semibold pb-2 text-zinc-800 border-b-2 border-b-slate-800">
            References
          </h3>
          {references?.map((reference) => (
            <Reference key={reference?.id} reference={reference} />
          ))}
        </div>
      )}
      {custom?.name && (
        <div className="mt-2 flex flex-col space-y-2">
          <h3 className="font-semibold pb-2 text-zinc-800 border-b-2 border-b-slate-800">
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
          <h3 className="font-semibold pb-2 text-zinc-800 border-b-2 border-b-slate-800">
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