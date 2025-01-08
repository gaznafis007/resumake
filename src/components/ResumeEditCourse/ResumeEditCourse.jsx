import { ResumeInfoContext } from "@/contexts/ResumeInfoProvider";
import {
  addCourse,
  removeCourse,
  updateCourse,
} from "@/redux/features/courseSlice";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddInfoButton from "../AddInfoButton/AddInfoButton";
import SaveAndDeleteSection from "../SaveAndDeleteSection/SaveAndDeleteSection";

const ResumeEditCourse = () => {
  const { setSectionCollapse } = useContext(ResumeInfoContext);
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  const handleAddCourse = () => {
    dispatch(addCourse());
  };
  const handleUpdateCourse = (id, field, value) => {
    dispatch(updateCourse({ id, field, value }));
  };
  const handleDelete = (id) => {
    dispatch(removeCourse(id));
  };
  const handleSave = () => {
    setSectionCollapse("");
  };
  return (
    <div className="flex flex-col mt-4 space-y-2">
      <h2 className="text-2xl font-semibold text-purple-800">Edit Courses</h2>
      {courses[0] &&
        courses?.map((course) => (
          <div key={course?.id} className="space-y-1">
            <div className="flex flex-col space-y-2">
              <label className="text-purple-800 font-semibold">
                Course Title
              </label>
              <input
                type="text"
                name="degree"
                defaultValue={course?.degree}
                onChange={(event) =>
                  handleUpdateCourse(course?.id, "title", event.target.value)
                }
                className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
                placeholder="Enter your degree"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-purple-800 font-semibold">
                Issuer / Organization
              </label>
              <input
                type="text"
                name="school"
                defaultValue={course?.school}
                onChange={(event) =>
                  handleUpdateCourse(
                    course?.id,
                    "institute",
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
                  defaultValue={course?.city}
                  onChange={(event) =>
                    handleUpdateCourse(course?.id, "city", event.target.value)
                  }
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
                  defaultValue={course?.country}
                  onChange={(event) =>
                    handleUpdateCourse(
                      course?.id,
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
                  defaultValue={course?.startDate}
                  onChange={(event) =>
                    handleUpdateCourse(
                      course?.id,
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
                  defaultValue={course?.endDate}
                  onChange={(event) =>
                    handleUpdateCourse(
                      course?.id,
                      "endDate",
                      event.target.value
                    )
                  }
                  className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-purple-800">Description</label>
              <textarea
                onChange={(event) =>
                  handleUpdateCourse(
                    course?.id,
                    "description",
                    event.target.value
                  )
                }
                type="text"
                name="description"
                className="border border-purple-800 text-purple-800 rounded-lg px-4 py-2"
                defaultValue={course?.description}
              ></textarea>
            </div>
            <SaveAndDeleteSection
              handleSave={handleSave}
              handleRemove={handleDelete}
              removeParams={course?.id}
            />
          </div>
        ))}
        <AddInfoButton handler={handleAddCourse} title={'Add Courses'}/>
    </div>
  );
};

export default ResumeEditCourse;
