import React from 'react';

export const Button = ({ 
    bgColor = "bg-blue-500 hover:bg-blue-700",
    textColor = "text-white",
    onClick,
    children,
    ...props
}) => (
    <button
        {...props}
        className={`${bgColor} ${textColor} font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        onClick={onClick}
    >
        {children}
    </button>
);