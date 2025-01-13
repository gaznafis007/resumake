import { ResumeInfoContext } from "@/contexts/ResumeInfoProvider";
import React, { useContext } from "react";
import { FaPlus} from "react-icons/fa";
import DefaultButton from "../DefaultButton/DefaultButton";
import SaveAndDeleteSection from "../SaveAndDeleteSection/SaveAndDeleteSection";
import { useDispatch, useSelector } from "react-redux";
import { addEducation, removeEducation, updateEducation } from "@/redux/features/educationSlice";
import AddInfoButton from "../AddInfoButton/AddInfoButton";

const ResumeEditEducation = () => {
    const {setSectionCollapse} = useContext(ResumeInfoContext)
    const educations = useSelector((state) => state.educations)
    const dispatch = useDispatch()
    const handleEducationSection = () =>{
        setSectionCollapse('')
    }
    const removeEducationSection = (id) =>{
        dispatch(removeEducation(id))
    }
    const handleAddEducation = () =>{
      dispatch(addEducation())
    }
    const handleUpdateEducation = (id, field, value) =>{
      dispatch(updateEducation({id, field, value}))
    }
  return (
    <div className="mt-4">
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-semibold text-purple-800 capitalize">enter your latest education</h2>
        {
          educations && educations?.map(education => (
            <>
              <div className="flex flex-col space-y-2">
          <label className="text-purple-800 font-semibold">Degree</label>
          <input
            type="text"
            name="degree"
            defaultValue={education?.degree}
            onChange={(event) => handleUpdateEducation(education?.id, 'degree', event.target.value)}
            className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
            placeholder="Enter your degree"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-purple-800 font-semibold">School</label>
          <input
            type="text"
            name="school"
            defaultValue={education?.school}
            onChange={(event) => handleUpdateEducation(education?.id, 'school', event.target.value)}
            className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
            placeholder="Enter school name"
          />
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            {/* city */}
            <div className="flex flex-col space-y-2 w-full md:w-1/2">
          <label className="text-purple-800 font-semibold">City</label>
          <input
            type="text"
            name="city"
            defaultValue={education?.city}
            onChange={(event) => handleUpdateEducation(education?.id, 'city', event.target.value)}
            className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
            placeholder="Enter your city"
          />
        </div>
        {/* country */}
        <div className="flex flex-col space-y-2 w-full md:w-1/2">
          <label className="text-purple-800 font-semibold">Country</label>
          <input
            type="text"
            name="country"
            defaultValue={education?.country}
            onChange={(event) => handleUpdateEducation(education?.id, 'country', event.target.value)}
            className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
            placeholder="Enter your country"
          />
        </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            {/* start date */}
            <div className="flex flex-col space-y-2 w-full md:w-1/2">
          <label className="text-purple-800 font-semibold">Start Date</label>
          <input
            type="date"
            name="startDate"
            defaultValue={education?.startDate}
            onChange={(event) => handleUpdateEducation(education?.id, 'startDate', event.target.value)}
            className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
            
          />
        </div>
        {/* end date */}
        <div className="flex flex-col space-y-2 w-full md:w-1/2">
          <label className="text-purple-800 font-semibold">End Date</label>
          <input
            type="date"
            name="endDate"
            defaultValue={education?.endDate}
            onChange={(event) => handleUpdateEducation(education?.id, 'endDate', event.target.value)}
            className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
            
          />
        </div>
        </div>
        <SaveAndDeleteSection handleSave={handleEducationSection} handleRemove={removeEducationSection} removeParams={education?.id} />
            </>
          ))
        }
        <AddInfoButton handler={handleAddEducation} title={'Add Education'}></AddInfoButton>
      </div>
    </div>
  );
};

export default ResumeEditEducation;
