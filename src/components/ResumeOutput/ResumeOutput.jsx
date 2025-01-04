import { ResumeInfoContext } from "@/contexts/ResumeInfoProvider";
import React, { useContext } from "react";
import { MdEmail, MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ResumeOutput = () => {
  const {fullName, jobTitle, email, phone, address} = useContext(ResumeInfoContext);
  return (
    <div className="p-8">
      {/* Personal Info */}
      <div>
        <h2 className={`text-2xl text-zinc-800 text-center font-bold capitalize`}>{fullName}</h2>
        <h2 className={`text-xl text-zinc-800 text-center capitalize`}>{jobTitle}</h2>
        <div className="flex flex-row items-center justify-center space-x-3 mt-2">
          {
            email && (
              <div className="flex flex-row items-center space-x-2">
                <MdEmail className="text-zinc-800"/>
                <p className="text-zinc-800">{email}</p>
              </div>
            )
          }
          {
            phone && (
              <div className="flex flex-row items-center space-x-2">
                <MdCall className="text-zinc-800"/>
                <p className="text-zinc-800">{phone}</p>
              </div>
            )
          }
          {
            address && (
              <div className="flex flex-row  items-center space-x-2">
                <FaLocationDot className="text-zinc-800"/>
                <p className="text-zinc-800">{address}</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default ResumeOutput;
