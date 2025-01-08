import React from 'react';

const Organization = ({org}) => {
    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-col space-y-1 items-start w-2/3">
            <p className="text-zinc-800 text-sm">
              <span className="font-bold">{org?.position}</span>{org?.org && <span className="font-thin"><i>, {org?.org}</i></span>}
            </p>
            {
                org?.description &&
                <p className="text-zinc-800 text-sm w-full">
                    {org?.description}
                </p>
            }
            </div>
            <div className="flex flex-col space-y-1 text-zinc-800 items-end">
              {
                (org?.startDate || org?.endDate) && (
                  <p className="text-sm">
                    {org?.startDate} - {org?.endDate}
                  </p>
                )
              }
              {
                (org?.city || org?.country) && (
                  <p className="text-sm">
                    <span>{org?.city}</span>{org?.country && <span className="font-thin">, {org?.country}</span>}
                  </p>
                )
              }
            </div>
          </div>
    );
};

export default Organization;