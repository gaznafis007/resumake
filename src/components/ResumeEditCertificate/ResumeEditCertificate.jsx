import React, { useContext } from "react";
import DefaultButton from "../DefaultButton/DefaultButton";
import { useDispatch, useSelector } from "react-redux";
import { addCertificate, removeCertificate, updateCertificate } from "@/redux/features/certificateSlice";
import { ResumeInfoContext } from "@/contexts/ResumeInfoProvider";
import { FaPlus } from "react-icons/fa";
import SaveAndDeleteSection from "../SaveAndDeleteSection/SaveAndDeleteSection";

const ResumeEditCertificate = () => {
    const {setSectionCollapse} = useContext(ResumeInfoContext)
  const certificates = useSelector((state) => state.certificates);
  const dispatch = useDispatch();
  const handleAddCertificate = () => {
    dispatch(addCertificate());
  };
  const handleUpdateCertificate = (id, field, value) =>{
    dispatch(updateCertificate({id, field, value}))
  }
  const handleDelete = (id) =>{
    dispatch(removeCertificate(id))
  }
  const handleSave  = () =>{
    setSectionCollapse('')
  }
  return (
    <div className="flex flex-col space-y-2 mt-4">
      <h2 className="text-2xl font-semibold text-purple-800">Edit Certificate Info</h2>
      {certificates &&
        certificates?.map((certificate) => (
          <div key={certificate?.id} className="flex flex-col mt-4 space-y-2">
            <div className="flex flex-col space-y-2">
              <label className="text-purple-800">Certificate name</label>
              <input
                onChange={(event) =>
                  handleUpdateCertificate(
                    certificate?.id,
                    "name",
                    event.target.value
                  )
                }
                type="text"
                name="item"
                className="border border-purple-800 text-purple-800 rounded-lg px-4 py-2"
                defaultValue={certificate?.name}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-purple-800">Author/ Organization</label>
              <input
                onChange={(event) =>
                  handleUpdateCertificate(
                    certificate?.id,
                    "org",
                    event.target.value
                  )
                }
                type="text"
                name="org"
                className="border border-purple-800 text-purple-800 rounded-lg px-4 py-2"
                defaultValue={certificate?.org}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-purple-800">Description</label>
              <textarea
                onChange={(event) =>
                  handleUpdateCertificate(
                    certificate?.id,
                    "description",
                    event.target.value
                  )
                }
                type="text"
                name="description"
                className="border border-purple-800 text-purple-800 rounded-lg px-4 py-2"
                defaultValue={certificate?.description}
              ></textarea>
            </div>
            <SaveAndDeleteSection handleSave={handleSave} handleRemove={handleDelete} removeParams={certificate?.id} />
          </div>
        ))}
      <DefaultButton handler={handleAddCertificate} optionalStyle={"mt-2"}>
        <div className="flex flex-row justify-center items-center space-x-2">
          <FaPlus />
          <p>Add Certificates</p>
        </div>
      </DefaultButton>
    </div>
  );
};

export default ResumeEditCertificate;
