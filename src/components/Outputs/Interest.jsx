import React from 'react';

const Interest = ({interest}) => {
    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-col space-y-1 items-start w-2/3">
            <p className="text-zinc-800 text-sm">
              <span className="font-bold">{interest?.name}</span>
            </p>
            {
                interest?.description &&
                <p className="text-zinc-800 font-thin text-sm w-full">
                    {interest?.description}
                </p>
            }
            </div>
          </div>
    );
};

export default Interest;