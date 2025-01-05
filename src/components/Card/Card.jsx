import React from 'react';

const Card = ({title, description, style, handler}) => {
    return (
        <div onClick={handler} className={`bg-slate-100 text-slate-800 rounded-lg p-4 ${style}`}>
            <h2 className="font-semibold text-xl">{title}</h2>
            <p className="mt-3 text-slate-600">
                {description}
            </p>
        </div>
    );
};

export default Card;