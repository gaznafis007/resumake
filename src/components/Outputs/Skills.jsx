import React from 'react';
import { useSelector } from 'react-redux';

const Skills = ({skills}) => {
  const style = useSelector((state) => state.style)
    return (
        <div className="flex flex-col justify-start space-y-1">
        <p className={`${style?.color?.text ? style?.color?.text : 'text-zinc-800'} text-sm`}>
          <span className="font-bold">Expertise:</span>{skills?.expertise && <span className="font-thin"> {skills?.expertise}</span>}
        </p>
        <p className={`${style?.color?.text ? style?.color?.text : 'text-zinc-800'} text-sm`}>
          <span className="font-bold">Comfortable:</span>{skills?.comfortable && <span className="font-thin"> {skills?.comfortable}</span>}
        </p>
        <p className={`${style?.color?.text ? style?.color?.text : 'text-zinc-800'} text-sm`}>
          <span className="font-bold">Familiar:</span>{skills?.familiar && <span className="font-thin"> {skills?.familiar}</span>}
        </p>
      </div>
    );
};

export default Skills;