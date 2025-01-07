import React, { useContext } from "react";
import DefaultButton from "../DefaultButton/DefaultButton";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addLanguage, removeLanguage, updateLanguage } from "@/redux/features/languageSlice";
import { ResumeInfoContext } from "@/contexts/ResumeInfoProvider";
import SaveAndDeleteSection from "../SaveAndDeleteSection/SaveAndDeleteSection";

const ResumeEditLanguage = () => {
    const {setSectionCollapse} = useContext(ResumeInfoContext)
    const languages = useSelector((state) =>state.languages)
    const dispatch = useDispatch();
    const handleSave = () =>{
        setSectionCollapse('')
    }
    const handleAddLanguage = () =>{
        dispatch(addLanguage())
    }
    const handleUpdateLanguage = (id, field, value) =>{
        dispatch(updateLanguage({id, field, value}))
    }
    const handleDelete = (id) =>{
        dispatch(removeLanguage(id))
    }
  return (
    <div className="flex flex-col space-y-2">
        {
            languages && languages?.map((language) =>(
                <div key={language?.id} className="flex flex-col space-y-2">
                    <h2 className="text-2xl font-bold text-purple-800">Edit Language Info</h2>
                    <div className="flex flex-col space-y-2">
                        <label className="text-purple-800">Language</label>
                        <input onChange={(event) => handleUpdateLanguage(language?.id, 'name', event.target.value)} type="text" name="item" className="border border-purple-800 text-purple-800 rounded-lg px-4 py-2" defaultValue={language?.name} />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="text-purple-800">Fluency Level</label>
                        <select defaultValue={language?.fluency} onChange={(event) => handleUpdateLanguage(language?.id, 'fluency', event.target.value)} name="fluency" id="" className="border border-purple-800 text-purple-800 rounded-lg px-4 py-2">
                            <option value="A1/Beginner">A1/Beginner</option>
                            <option value="A2/Amateur">A2/Amateur</option>
                            <option value="B1/Intermediate">B1/Intermediate</option>
                            <option value="B2/Proficient">B2/Proficient</option>
                            <option value="C1/Native">C1/Native</option>
                        </select>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="text-purple-800">Description</label>
                        <textarea defaultValue={language?.description} onChange={(event) => handleUpdateLanguage(language?.id, 'description', event.target.value)} type="text" name="item" className="border border-purple-800 text-purple-800 rounded-lg px-4 py-2"></textarea>
                    </div>
                    <SaveAndDeleteSection handleSave={handleSave} handleRemove={handleDelete} removeParams={language?.id} />
                </div>
            ))
        }
      <DefaultButton handler={handleAddLanguage} optionalStyle={'mt-2'}>
        <div className="flex flex-row justify-center items-center space-x-2">
          <FaPlus />
          <p>Add Experiences</p>
        </div>
      </DefaultButton>
    </div>
  );
};

export default ResumeEditLanguage;
