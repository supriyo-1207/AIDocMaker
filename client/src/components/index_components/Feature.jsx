// FeatureSection.js
import React from 'react';
import feature1 from '../../assets/feature1.png';
import feature2 from '../../assets/feature2.png';

const Feature = () => {
    return (
        <>
            <section className="feature-section">
                <div className="container">
                    <h2 className="text-center mb-5">Features of the AI Documents Generator</h2>
                    <div className="row mb-5">
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="feature-text">
                                <h3 className="feature-title">Powerful AI Writing in Seconds</h3>
                                <p>Leverage cutting-edge AI to draft documents faster with automated writing for ultimate productivity.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={feature1} alt="Ready to use documents" className="img-fluid feature_image" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 order-md-2 d-flex align-items-center">
                            <div className="feature-text">
                                <h3 className="feature-title">Easily Import Files for AI Generation</h3>
                                <p>Easily attach your files with simple instructions to effortlessly import content and generate a new document with AI.</p>
                            </div>
                        </div>
                        <div className="col-md-6 order-md-1">
                            <img src={feature2} alt="Customizable documents" className="img-fluid feature_image" />
                        </div>
                    </div>
                </div>
            </section>
            <style jsx='true'>
                {`
                    /* FeatureSection.css */
                    .feature-section {
                        padding: 60px 20px;
                         background: linear-gradient(45deg, #333, #111);
                        animation: fadeIn 1s ease-in;
                        position: relative;
                        overflow: hidden;
                    }

                    .feature-text {
                        animation: slideInLeft 0.5s ease-in-out;
                        padding: 20px;
                    }

                    .feature-title {
                        font-size: 24px;
                        margin-bottom: 15px;
                        position: relative;
                        color: #333;
                    }

                    .feature-title::after {
                        content: '';
                        width: 60px;
                        height: 3px;
                        background: #ff6f61; /* Accent color */
                        position: absolute;
                        bottom: -10px;
                        left: 0;
                        animation: underlineAnim 0.5s forwards ease-in-out;
                    }

                    .feature_image {
                        border: 8px solid #e0e0e0; /* Softer grey for the border */
                        border-radius: 15px; /* More rounded corners */
                        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Enhanced shadow for depth */
                        transition: transform 0.3s; /* Smooth scale transition */
                    }

                    .feature_image:hover {
                        transform: scale(1.05); /* Scale on hover for interactivity */
                    }

                    @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }

                    @keyframes slideInLeft {
                        from { transform: translateX(-20px); opacity: 0; }
                        to { transform: translateX(0); opacity: 1; }
                    }

                    @keyframes underlineAnim {
                        from { width: 0; }
                        to { width: 60px; }
                    }

                    @media (max-width: 768px) {
                        .feature-section {
                            padding: 40px 15px; /* Adjust padding for smaller screens */
                        }

                        .feature_image {
                            margin-bottom: 20px; /* Add spacing between images and text on smaller screens */
                        }

                        .feature-title {
                            font-size: 20px; /* Responsive font size for title */
                        }
                    }

                    @media (max-width: 480px) {
                        .feature-title {
                            font-size: 18px; /* Further responsive adjustment */
                        }

                        .feature-text {
                            padding: 15px; /* Adjust padding for smaller screens */
                        }
                    }
                `}
            </style>
        </>
    );
};

export default Feature;
