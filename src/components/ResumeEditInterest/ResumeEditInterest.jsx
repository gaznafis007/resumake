import React, { useContext } from "react";
import DefaultButton from "../DefaultButton/DefaultButton";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addInterest, removeInterest, updateInterest } from "@/redux/features/interestSlice";
import SaveAndDeleteSection from "../SaveAndDeleteSection/SaveAndDeleteSection";
import { ResumeInfoContext } from "@/contexts/ResumeInfoProvider";

const ResumeEditInterest = () => {
    const {setSectionCollapse} = useContext(ResumeInfoContext);
  const dispatch = useDispatch();
  const interests = useSelector((state) => state.interests);
  const handleAddInterest = () => {
    dispatch(addInterest());
  };
  const handleSave = () =>{
    setSectionCollapse('')
  }
  const handleDelete = (id) =>{
    dispatch(removeInterest(id))
  }
  const handleUpdateInterest = (id, field, value)=>{
    dispatch(updateInterest({id, field, value}))
  }
  return (
    <div className="flex flex-col space-y-2 mt-4">
      <h2 className="text-2xl font-semibold text-purple-800">
        Edit Your Interest
      </h2>
      {
        interests[0] && interests?.map(interest =>(
            <div key={interest?.id} className="flex flex-col mt-4 space-y-2">
            <div className="flex flex-col space-y-2">
              <label className="text-purple-800">Interest</label>
              <input
                onChange={(event) =>
                  handleUpdateInterest(
                    interest?.id,
                    "name",
                    event.target.value
                  )
                }
                type="text"
                name="item"
                className="border border-purple-800 text-purple-800 rounded-lg px-4 py-2"
                defaultValue={interest?.name}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-purple-800">Description</label>
              <textarea
                onChange={(event) =>
                  handleUpdateInterest(
                    interest?.id,
                    "description",
                    event.target.value
                  )
                }
                type="text"
                name="description"
                className="border border-purple-800 text-purple-800 rounded-lg px-4 py-2"
                defaultValue={interest?.description}
              ></textarea>
            </div>
            <SaveAndDeleteSection handleSave={handleSave} handleRemove={handleDelete} removeParams={interest?.id} />
          </div>
        ))
      }
      <DefaultButton handler={handleAddInterest} optionalStyle={"mt-2"}>
        <div className="flex flex-row justify-center items-center space-x-2">
          <FaPlus />
          <p>Add Interests</p>
        </div>
      </DefaultButton>
    </div>
  );
};

export default ResumeEditInterest;
