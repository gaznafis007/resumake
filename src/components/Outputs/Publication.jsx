import React from "react";

const Publication = ({ publication }) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col space-y-1 items-start w-2/3">
        <p className="text-zinc-800 text-sm">
          <a href={publication?.url}>
            <span className="font-bold">{publication?.title}</span>
            {publication?.publisher && (
              <span className="font-thin">
                <i>, {publication?.publisher}</i>
              </span>
            )}
          </a>
        </p>
        {publication?.description && (
          <p className="text-zinc-800 text-sm w-full">
            {publication?.description}
          </p>
        )}
      </div>
      <div className="flex flex-col space-y-1 text-zinc-800 items-end">
        {publication?.date && <p className="text-sm">{publication?.date}</p>}
      </div>
    </div>
  );
};

export default Publication;
