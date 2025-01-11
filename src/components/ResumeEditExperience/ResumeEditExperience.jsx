"use client";
import { ResumeInfoContext } from "@/contexts/ResumeInfoProvider";
import React, { useContext } from "react";
import SaveAndDeleteSection from "../SaveAndDeleteSection/SaveAndDeleteSection";
import { useDispatch, useSelector } from "react-redux";
import DefaultButton from "../DefaultButton/DefaultButton";
import { FaPlus } from "react-icons/fa";
import {
  addExperience,
  removeExperience,
  updateExperience,
} from "@/redux/features/experienceSlice";

const ResumeEditExperience = () => {
  const { setSectionCollapse } = useContext(ResumeInfoContext);
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.experiences);
  // console.log(experiences);
  const handleExperienceSection = () => {
    setSectionCollapse("");
  };
  const removeExperienceSection = (id) => {
    dispatch(removeExperience(id));
  };
  const handleUpdateInput = (id, field, value) => {
    dispatch(updateExperience({ id, field, value }));
  };
  const handleAddExperience = () => {
    dispatch(addExperience());
  };
  return (
    <div className="mt-4">
      {experiences &&
        experiences?.map((experience) => (
          <>
            <div key={experience?.id} className="flex flex-col space-y-2">
              <h2 className="text-2xl font-semibold text-purple-800 capitalize">
                enter your professional experiences
              </h2>
              <div className="flex flex-col space-y-2">
                <label className="text-purple-800 font-semibold">
                  Job Title
                </label>
                <input
                  type="text"
                  name="title"
                  defaultValue={experience?.title}
                  onChange={(event) =>
                    handleUpdateInput(
                      experience?.id,
                      "title",
                      event.target.value
                    )
                  }
                  className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
                  placeholder="Enter job title"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-purple-800 font-semibold">Company</label>
                <input
                  type="text"
                  name="company"
                  defaultValue={experience?.company}
                  onChange={(event) =>
                    handleUpdateInput(
                      experience?.id,
                      "company",
                      event.target.value
                    )
                  }
                  className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
                  placeholder="Enter company name"
                />
              </div>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                {/* city */}
                <div className="flex flex-col space-y-2 w-full md:w-1/2">
                  <label className="text-purple-800 font-semibold">City</label>
                  <input
                    type="text"
                    name="city"
                    defaultValue={experience?.city}
                    onChange={(event) =>
                      handleUpdateInput(
                        experience?.id,
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
                    defaultValue={experience?.country}
                    onChange={(event) =>
                      handleUpdateInput(
                        experience?.id,
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
                    defaultValue={experience?.startDate}
                    onChange={(event) =>
                      handleUpdateInput(
                        experience?.id,
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
                    defaultValue={experience?.endDate}
                    onChange={(event) =>
                      handleUpdateInput(
                        experience?.id,
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
                  defaultValue={experience?.description}
                  onChange={(event) =>
                    handleUpdateInput(
                      experience?.id,
                      "description",
                      event.target.value
                    )
                  }
                  className="border border-purple-800 rounded-lg p-6 bg-purple-100 text-purple-800"
                ></textarea>
              </div>
            </div>
            <SaveAndDeleteSection
              handleSave={handleExperienceSection}
              handleRemove={removeExperienceSection}
              removeParams={experience.id}
            />
          </>
        ))}
      <DefaultButton handler={handleAddExperience}>
        <div className="flex flex-row items-center space-x-2">
          <FaPlus />
          <p>Add Experiences</p>
        </div>
      </DefaultButton>
    </div>
  );
};

export default ResumeEditExperience;
