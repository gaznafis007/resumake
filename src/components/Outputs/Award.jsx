import React from 'react';

const Award = ({award}) => {
    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-col space-y-1">
            <p className="text-zinc-800 text-sm">
              <span className="font-bold">{award?.title}</span>{award?.issuer && <span className="font-thin"><i>, {award?.issuer}</i></span>}
            </p>
            {
                award?.description && (
                    <p className="text-zinc-800 font-thin">
                        {award?.description}
                    </p>
                )
            }
            </div>
            <div className="flex flex-col space-y-1 text-zinc-800 items-end">
              {
                award?.date && (
                  <p className="text-sm">
                    Issue Date: {award?.date}
                  </p>
                )
              }
            </div>
          </div>
    );
};

export default Award;