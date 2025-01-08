import React from 'react';

const Course = ({course}) => {
    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-col space-y-1 items-start">
            <p className="text-zinc-800 text-sm">
              <span className="font-bold">{course?.title}</span>{course?.institute && <span className="font-thin"><i>, {course?.institute}</i></span>}
            </p>
            {
                course?.description && (
                   <p className="text-zinc-800 text-sm font-thin">
                    {course?.description}
                   </p>
                )
            }
            </div>
            <div className="flex flex-col space-y-1 text-zinc-800 items-end">
              {
                (course?.startDate || course?.endDate) && (
                  <p className="text-sm">
                    {course?.startDate} - {course?.endDate}
                  </p>
                )
              }
              {
                (course?.city || course?.country) && (
                  <p className="text-sm">
                    <span>{course?.city}</span>{course?.country && <span className="font-thin">, {course?.country}</span>}
                  </p>
                )
              }
            </div>
          </div>
    );
};

export default Course;