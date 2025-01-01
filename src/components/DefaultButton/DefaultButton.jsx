import React from "react";

const DefaultButton = ({ children, handler, params, optionalStyle }) => {
  return (
    <button
      onClick={params ? () => handler(params) : handler}
      className={`rounded-md px-6 py-3 bg-violet-600 hover:bg-violet-800 text-white font-semibold ${optionalStyle}`}
    >
      {children}
    </button>
  );
};

export default DefaultButton;
