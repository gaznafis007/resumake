
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { useContext } from "react";
import { ResumeInfoContext } from "@/contexts/ResumeInfoProvider";



const ResumePersonalInfoPlaceholder = () => {
  const {fullName} = useContext(ResumeInfoContext)
    return (
        <>
        <h1 className="text-2xl font-semibold text-slate-400 capitalize">
          {fullName ? fullName : "Your Full Name"}
        </h1>
        <div className="flex flex-col space-y-2 mt-4 md:mt-6">
          <div className="flex flex-row items-center space-x-2 text-slate-400 font-thin">
            <MdOutlineMail className="text-xl" />
            <p>Email</p>
          </div>
          <div className="flex flex-row items-center space-x-2 text-slate-400 font-thin">
            <MdOutlinePhone className="text-xl" />
            <p>Mobile Number</p>
          </div>
          <div className="flex flex-row items-center space-x-2 text-slate-400 font-thin">
            <CiLocationOn className="text-xl" />
            <p>Address</p>
          </div>
        </div>
        </>
    );
};

export default ResumePersonalInfoPlaceholder;