import React from 'react';

const Language = ({language}) => {
    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-col space-y-1 items-start w-2/3">
            <p className="text-zinc-800 text-sm">
              <span className="font-bold">{language?.name}</span>{language?.fluency && <span className="font-thin"><i>, {language?.fluency}</i></span>}
            </p>
            {
                language?.description &&
                <p className="text-zinc-800 text-sm w-full">
                    {language?.description}
                </p>
            }
            </div>
          </div>
    );
};

export default Language;