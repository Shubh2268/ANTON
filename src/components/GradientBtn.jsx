import React from 'react';

const GradientBtn = ({ title, className }) => {
    return (
        <button className={`bg-gradient-to-r from-thOrange to bg-thBlue py-2 px-6 text-black rounded-lg hover:scale-105 ease-in duration-300 ${className}`}>{title}</button>
    )
}

export default GradientBtn;
