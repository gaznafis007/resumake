import React from 'react';

const Custom = ({custom}) => {
    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-col space-y-1 items-start w-2/3">
            <p className="text-zinc-800 text-sm">
              <span className="font-bold">{custom?.title}</span>{custom?.subtitle && <span className="font-thin"><i>, {custom?.subtitle}</i></span>}
            </p>
            {
                custom?.description &&
                <p className="text-zinc-800 text-sm w-full">
                    {custom?.description}
                </p>
            }
            </div>
            <div className="flex flex-col space-y-1 text-zinc-800 items-end">
              {
                (custom?.startDate || custom?.endDate) && (
                  <p className="text-sm">
                    {custom?.startDate} - {custom?.endDate}
                  </p>
                )
              }
              {
                (custom?.city || custom?.country) && (
                  <p className="text-sm">
                    <span>{custom?.city}</span>{custom?.country && <span className="font-thin">, {custom?.country}</span>}
                  </p>
                )
              }
            </div>
          </div>
    );
};

export default Custom;