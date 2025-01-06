import React from "react";

const ResumeEditEducation = () => {
  return (
    <div className="mt-4">
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-semibold capitalize">enter your latest education</h2>
        <div className="flex flex-col space-y-2">
          <label className="text-purple-800 font-semibold">Degree</label>
          <input
            type="text"
            name="degree"
            className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
            placeholder="Enter your degree"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-purple-800 font-semibold">School</label>
          <input
            type="text"
            name="school"
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
            className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
            
          />
        </div>
        {/* end date */}
        <div className="flex flex-col space-y-2 w-full md:w-1/2">
          <label className="text-purple-800 font-semibold">End Date</label>
          <input
            type="date"
            name="endDate"
            className="border border-purple-800 rounded-lg p-2 bg-purple-100 text-purple-800"
            
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeEditEducation;
