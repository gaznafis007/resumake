import React from 'react';

const Experience = ({experience}) => {
    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-col space-y-1 items-start w-2/3">
            <p className="text-zinc-800 text-sm">
              <span className="font-bold">{experience?.title}</span>{experience?.company && <span className="font-thin"><i>, {experience?.company}</i></span>}
            </p>
            {
                experience?.description &&
                <p className="text-zinc-800 text-sm w-full">
                    {experience?.description}
                </p>
            }
            </div>
            <div className="flex flex-col space-y-1 text-zinc-800 items-end">
              {
                (experience?.startDate || experience?.endDate) && (
                  <p className="text-sm">
                    {experience?.startDate} - {experience?.endDate}
                  </p>
                )
              }
              {
                (experience?.city || experience?.country) && (
                  <p className="text-sm">
                    <span>{experience?.city}</span>{experience?.country && <span className="font-thin">, {experience?.country}</span>}
                  </p>
                )
              }
            </div>
          </div>
    );
};

export default Experience;