import { ResumeInfoContext } from "@/contexts/ResumeInfoProvider";
import {
  addSection,
  addSectionName,
  removeSection,
  updateSection,
} from "@/redux/features/customSlice";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddInfoButton from "../AddInfoButton/AddInfoButton";
import SaveAndDeleteSection from "../SaveAndDeleteSection/SaveAndDeleteSection";

const ResumeEditCustomSection = () => {
  const { setSectionCollapse } = useContext(ResumeInfoContext);
  const custom = useSelector((state) => state.custom);
  const dispatch = useDispatch();
  const handleSave = () => {
    setSectionCollapse("");
  };
  const handleDelete = (id) => {
    dispatch(removeSection(id));
  };
  const handleSectionName = (name) => {
    dispatch(addSectionName(name));
  };
  const handleAddSection = () => {
    dispatch(addSection());
  };
  const handleUpdateCustom = (id, field, value) => {
    dispatch(updateSection({ id, field, value }));
  };
  return (
    <div className="flex flex-col mt-4 space-y-2">
      <h2 className="text-2xl font-semibold text-purple-800">
        Edit Custom Section
      </h2>
      <div className="flex flex-col space-y-2">
        <label className="text-purple-800 font-semibold">Section Name</label>
        <input
          type="text"
          name="section"
          defaultValue={custom?.name}
          onChange={(event) => handleSectionName(event.target.value)}
          className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
        />
      </div>
      {custom.sections &&
        custom.sections?.map((custom) => (
          <div key={custom?.id}>
            <div  className="flex flex-col space-y-2">
              <h2 className="text-2xl font-semibold text-purple-800 capitalize">
                enter your professional customs
              </h2>
              <div className="flex flex-col space-y-2">
                <label className="text-purple-800 font-semibold">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  defaultValue={custom?.title}
                  onChange={(event) =>
                    handleUpdateCustom(
                      custom?.id,
                      "title",
                      event.target.value
                    )
                  }
                  className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
                  placeholder="Enter title"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-purple-800 font-semibold">Subtitle</label>
                <input
                  type="text"
                  name="subtitle"
                  defaultValue={custom?.company}
                  onChange={(event) =>
                    handleUpdateCustom(
                      custom?.id,
                      "subtitle",
                      event.target.value
                    )
                  }
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
                    defaultValue={custom?.city}
                    onChange={(event) =>
                      handleUpdateCustom(
                        custom?.id,
                        "city",
                        event.target.value
                      )
                    }
                    className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
                    placeholder="Enter your city"
                  />
                </div>
                {/* country */}
                <div className="flex flex-col space-y-2 w-full md:w-1/2">
                  <label className="text-purple-800 font-semibold">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    defaultValue={custom?.country}
                    onChange={(event) =>
                      handleUpdateCustom(
                        custom?.id,
                        "country",
                        event.target.value
                      )
                    }
                    className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
                    placeholder="Enter your country"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                {/* start date */}
                <div className="flex flex-col space-y-2 w-full md:w-1/2">
                  <label className="text-purple-800 font-semibold">
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    defaultValue={custom?.startDate}
                    onChange={(event) =>
                      handleUpdateCustom(
                        custom?.id,
                        "startDate",
                        event.target.value
                      )
                    }
                    className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
                  />
                </div>
                {/* end date */}
                <div className="flex flex-col space-y-2 w-full md:w-1/2">
                  <label className="text-purple-800 font-semibold">
                    End Date
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    defaultValue={custom?.endDate}
                    onChange={(event) =>
                      handleUpdateCustom(
                        custom?.id,
                        "endDate",
                        event.target.value
                      )
                    }
                    className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
                  />
                </div>
              </div>
              {/* description */}
              <div className="flex flex-col space-y-2">
                <label className="text-purple-800 font-semibold">
                  Description
                </label>
                <textarea
                  type="text"
                  name="description"
                  defaultValue={custom?.description}
                  onChange={(event) =>
                    handleUpdateCustom(
                      custom?.id,
                      "description",
                      event.target.value
                    )
                  }
                  className="border border-purple-800 rounded-lg p-6 bg-purple-100 text-purple-800"
                ></textarea>
              </div>
            </div>
            <SaveAndDeleteSection
              handleSave={handleSave}
              handleRemove={handleDelete}
              removeParams={custom.id}
            />
          </div>
        ))}
      <AddInfoButton title={'Add Custom Section'} handler={handleAddSection}></AddInfoButton>
    </div>
  );
};

export default ResumeEditCustomSection;
