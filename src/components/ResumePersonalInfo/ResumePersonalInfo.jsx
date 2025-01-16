import { useContext } from "react";
import Button from "../Button/Button";
import ResumePersonalInfoPlaceholder from "../ResumePersonalInfoPlaceholder/ResumePersonalInfoPlaceholder";
import { ResumeInfoContext } from "@/contexts/ResumeInfoProvider";
import { FaEdit } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import ResumePersonalInfoForm from "../ResumePersonalInfoForm/ResumePersonalInfoForm";

const ResumePersonalInfo = () => {
  const {editSection, setEditSection} = useContext(ResumeInfoContext);
  
  const handleRemoveEditSection = () =>{
    setEditSection('')
  }
  return (
    <>
      <div className="w-full bg-white p-4 rounded-lg mt-6 md:mt-10">
        <div className="flex justify-end items-end">
          {editSection === "personalInfo" ? (
            <Button
              handler={handleRemoveEditSection}
              style={
                "text-white text-xl rounded-full p-3 bg-purple-400 hover:bg-purple-500 mb-4"
              }
            >
              <RxCross2 />
            </Button>
          ) : (
            <Button
              handler={setEditSection}
              params={"personalInfo"}
              style={
                "text-white text-xl rounded-full p-3 bg-purple-400 hover:bg-purple-500 mb-4"
              }
            >
              <FaEdit />
            </Button>
          )}
        </div>
        {
          editSection ? <ResumePersonalInfoForm/> : <ResumePersonalInfoPlaceholder/>
        }
      </div>
    </>
  );
};

export default ResumePersonalInfo;
