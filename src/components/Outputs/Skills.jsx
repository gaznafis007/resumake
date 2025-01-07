import React from 'react';

const Skills = ({skills}) => {
    return (
        <div className="flex flex-col justify-start space-y-1">
        <p className="text-zinc-800 text-sm">
          <span className="font-bold">Expertise:</span>{skills?.expertise && <span className="font-thin"> {skills?.expertise}</span>}
        </p>
        <p className="text-zinc-800 text-sm">
          <span className="font-bold">Comfortable:</span>{skills?.comfortable && <span className="font-thin"> {skills?.comfortable}</span>}
        </p>
        <p className="text-zinc-800 text-sm">
          <span className="font-bold">Familiar:</span>{skills?.familiar && <span className="font-thin"> {skills?.familiar}</span>}
        </p>
      </div>
    );
};

export default Skills;