import React from 'react';

function Select({ options, value, onChange, label, id, aria_label, className }) {
    return (
        <> 
            {label && <label htmlFor={id}>{label}</label>} {/* Ensure the label is associated with the select */}
            <select
                value={value}
                onChange={onChange}
                className={`form-select ${className}`} // Combine className with default styles
                id={id} // Use the id prop passed from parent
                aria-label={aria_label} // Use the aria_label prop
                required
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </>
    );
}

export default Select;
