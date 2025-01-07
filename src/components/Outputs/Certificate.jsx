import React from 'react';

const Certificate = ({certificate}) => {
    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-col space-y-1 items-start w-2/3">
            <p className="text-zinc-800 text-sm">
              <span className="font-bold">{certificate?.name}</span>{certificate?.org && <span className="font-thin"><i>, {certificate?.org}</i></span>}
            </p>
            {
                certificate?.description &&
                <p className="text-zinc-800 text-sm w-full">
                    {certificate?.description}
                </p>
            }
            </div>
          </div>
    );
};

export default Certificate;