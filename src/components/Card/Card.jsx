import React from 'react';

const Card = ({title, description, style}) => {
    return (
        <div className={`bg-slate-300 text-slate-800 rounded-lg p-4 ${style}`}>
            <h2 className="font-semibold text-xl">{title}</h2>
            <p className="mt-3">
                {description}
            </p>
        </div>
    );
};

export default Card;