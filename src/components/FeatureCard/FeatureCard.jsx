import React from 'react';

const FeatureCard = ({title, description, bgColor, color, styleOptions}) => {
    return (
        <div className={`rounded-t-xl rounded-br-lg p-5 ${color ? color : 'text-slate-800'} ${bgColor ? bgColor : 'bg-violet-900'}`}>
            <h3 className="text-xl mt-12">{title}</h3>
            <p className="mt-3">{description}</p>
        </div>
    );
};

export default FeatureCard;