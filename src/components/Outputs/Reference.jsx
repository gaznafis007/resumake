import React from "react";

const reference = ({ reference }) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col space-y-1 items-start w-2/3">
        <p className="text-zinc-800 text-sm">
          <span className="font-bold">{reference?.name}</span>
          {reference?.position && (
            <span className="font-thin">
              <i>, {reference?.position}</i>
            </span>
          )}
          {reference?.company && (
            <span className="font-thin capitalize">, {reference?.company}.</span>
          )}
        </p>
        {(reference?.email || reference?.phone) && (
          <p className="text-sm font-thin text-zinc-800">
            <span>{reference?.email}</span>
            {reference?.phone && (
              <span className="font-thin">, {reference?.phone}</span>
            )}
          </p>
        )}
      </div>
    </div>
  );
};

export default reference;
