import React from 'react'

const button = ({
    label,
    iconUrl,
    backgroundColor,
    textColor,
    borderColor,
    fullWidth,
    iconComp
}) => {
    return (
        <button
            className={`flex justify-center items-center gap-2 px-7 py-4 border font-mono text-lg leading-none 
   ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : "bg-red-400 text-white border-red-500"} rounded-full ${fullWidth && "w-full"}`}>
            {label}
            {iconComp}
            {iconUrl && (
                <img src={iconUrl} alt="arrow right" className="ml-2 rounded-full bg-white w-5 h-5"/>
                
            )}
        </button>
    )
}

export default button
