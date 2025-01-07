import React from 'react';

const Education = ({education}) => {
    return (
        <div className="flex flex-row justify-between">
            <p className="text-zinc-800 text-sm">
              <span className="font-bold">{education?.degree}</span>{education?.school && <span className="font-thin"><i>, {education?.school}</i></span>}
            </p>
            <div className="flex flex-col space-y-1 text-zinc-800 items-end">
              {
                (education?.startDate || education?.endDate) && (
                  <p className="text-sm">
                    {education?.startDate} - {education?.endDate}
                  </p>
                )
              }
              {
                (education?.city || education?.country) && (
                  <p className="text-sm">
                    <span>{education?.city}</span>{education?.country && <span className="font-thin">, {education?.country}</span>}
                  </p>
                )
              }
            </div>
          </div>
    );
};

export default Education;