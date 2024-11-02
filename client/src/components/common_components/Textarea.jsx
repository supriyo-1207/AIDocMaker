import React from 'react';

function TextArea({ label, value, onChange, placeholder, required, className, id, aria_label }) {
    return (
        <div className={`form-group ${className}`}>
            {label && <label htmlFor={id}>{label}</label>} {/* Label association for accessibility */}
            <textarea
                id={id} // Use the id prop for accessibility
                className="form-control"
                rows="3"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required} // Conditionally required
                aria-label={aria_label} // Use the aria-label prop for accessibility
            />
        </div>
    );
}

export default TextArea;
