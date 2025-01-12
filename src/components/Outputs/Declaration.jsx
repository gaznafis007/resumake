import Image from "next/image";
import React from "react";

const Declaration = ({ declaration }) => {
  return (
    <div className="flex flex-col space-y-3">
      <h3 className="text-sm font-thin text-zinc-800">
        {declaration?.description}
      </h3>
      <div className="flex flex-col space-y-2 justify-end">
        {
            declaration?.image && <Image alt="signature" className="place-self-end" src={declaration?.image} width={100} height={100}/>
        }
        <div className="border-t border-t-zinc-800 pt-2 text-right w-1/3 place-self-end">
        <p className="text-zinc-800 text-sm">
          {declaration?.name}
        </p>
        {(declaration?.address || declaration?.date) && (
          <p className="text-zinc-800 text-sm">
            {declaration?.address}{" "}
            {declaration?.date && <span>, {declaration?.date}</span>}
          </p>
        )}
        </div>
      </div>
    </div>
  );
};

export default Declaration;
