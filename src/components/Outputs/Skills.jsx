import React from 'react';

const Skills = ({skills}) => {
    return (
        <div className="flex flex-row justify-between">
        <p className="text-zinc-800 text-sm">
          <span className="font-bold">{skills?.degree}</span>{skills?.school && <span className="font-thin"><i>, {skills?.school}</i></span>}
        </p>
        <div className="flex flex-col space-y-1 text-zinc-800 items-end">
          {
            (skills?.startDate || skills?.endDate) && (
              <p className="text-sm">
                {skills?.startDate} - {skills?.endDate}
              </p>
            )
          }
          {
            (skills?.city || skills?.country) && (
              <p className="text-sm">
                <span>{skills?.city}</span>{skills?.country && <span className="font-thin">, {skills?.country}</span>}
              </p>
            )
          }
        </div>
      </div>
    );
};

export default Skills;