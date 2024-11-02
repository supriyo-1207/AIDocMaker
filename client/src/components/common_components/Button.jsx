import React from 'react';

function Button({ type, onClick, disabled, ariaLabel, children, className ,id}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`btn ${className}`} // Combine with any additional class names
            aria-label={ariaLabel}
            disabled={disabled}
            id={id}
        >
            {children}
        </button>
    );
}

export default Button;
