
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { useSelector } from "react-redux";



const ResumePersonalInfoPlaceholder = () => {
  const profile = useSelector((state) => state.profile)

    return (
        <>
        <h1 className="text-2xl font-semibold text-slate-400 capitalize">
          {profile?.fullName ? profile?.fullName : "Your Full Name"}
        </h1>
        <div className="flex flex-col space-y-2 mt-4 md:mt-6">
          <div className="flex flex-row items-center space-x-2 text-slate-400 font-thin">
            <MdOutlineMail className="text-xl" />
            <p>{profile?.email ? profile?.email : "Email"}</p>
          </div>
          <div className="flex flex-row items-center space-x-2 text-slate-400 font-thin">
            <MdOutlinePhone className="text-xl" />
            <p>{profile?.phone ? profile?.phone : 'Mobile Number'}</p>
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