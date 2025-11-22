import React from 'react';


function PrimaryButton(props) {

    const {
        children,
        onClick,
        isLoading,
        disabled,
        type = "button",
        className = ""
    } = props

    const baseClass = "w-25 px-4 py-2 m-2 font-semibold rounded-md shadow-md  active:border-2 active:border-transparent";

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseClass} ${className}`}
        >
            {isLoading ? "..." : children}
        </button>
    )
}

// ${trulyDisabled ? 'opacity-50 cursor-not-allowed' : ''}
// ${className} 

export default PrimaryButton