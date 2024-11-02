import React from 'react';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404 - Page Not Found</h1>
            <p className="not-found-message">The page you are looking for does not exist.</p>
            <a href="/" className="not-found-link">Go to Home</a>

            <style jsx>{`
                .not-found-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh; /* Full viewport height */
                    background-color: #f8f9fa; /* Light gray background */
                    text-align: center;
                }

                .not-found-title {
                    font-size: 48px; /* Large title font */
                    color: #dc3545; /* Bootstrap danger color for emphasis */
                    margin-bottom: 20px; /* Space below title */
                }

                .not-found-message {
                    font-size: 18px; /* Medium message font */
                    color: #6c757d; /* Bootstrap muted color */
                    margin-bottom: 30px; /* Space below message */
                }

                .not-found-link {
                    padding: 10px 20px; /* Padding around link */
                    background-color: #007bff; /* Bootstrap primary color */
                    color: white; /* White text */
                    text-decoration: none; /* No underline */
                    border-radius: 5px; /* Rounded corners */
                    transition: background-color 0.3s; /* Smooth transition */
                }

                .not-found-link:hover {
                    background-color: #0056b3; /* Darker blue on hover */
                }

                /* Responsive styles */
                @media (max-width: 768px) {
                    .not-found-title {
                        font-size: 36px; /* Smaller title font on mobile */
                    }

                    .not-found-message {
                        font-size: 16px; /* Smaller message font on mobile */
                    }
                }
            `}</style>
        </div>
    );
};

export default NotFound;
