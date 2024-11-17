// HeroSection.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import docsIcon from '../../assets/docs.png';
import pdfIcon from '../../assets/pdf.webp';
import slideIcon from '../../assets/slide.png';
import Button from '../common_components/Button';
const Hero = () => {
    const navigate = useNavigate();
    // Effect for animating the hero section on load
    useEffect(() => {
        const heroSection = document.querySelector('.hero-section');
        heroSection.classList.add('animate');
    }, []);

    return (
        <>
            <section className="hero-section d-flex  text-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="hero_icon mb-4 d-flex justify-content-center align-items-center"> {/* Added align-items-center */}
                                <img src={docsIcon} alt="document icon" className='m-2 cursor-pointer' />
                                <img src={pdfIcon} alt="pdf icon" className='m-2 cursor-pointer' />
                                <img src={slideIcon} alt="spreadsheet icon" className='m-2 cursor-pointer' />
                            </div>
                            <h1 className="mb-3 text-light">Boost Your Efficiency with AI-Powered Document Generation</h1>
                            <p className="mb-4 text-light">Generate DOCX, PDF, and Excel Files in Seconds – Powered by AI</p>
                            <p className="text-light">
                                Effortlessly create professional documents, spreadsheets, and reports with our AI-based tool.
                                Choose from customizable templates or generate content from scratch, all tailored to your needs.
                                Save time and enhance productivity with AI that adapts to your requirements – perfect for business, education, and personal use.
                            </p>

                            {/* <button className="btn btn-primary px-4 py-2">
                                 Generate
                            </button> */}
                            <Button
                                type="button"
                                onClick={() => navigate('/document')}
                                disabled={false}
                                ariaLabel="Generate"
                                children="Generate"
                                className="btn btn-primary px-4 py-2"
                            ></Button>

                        </div>
                    </div>
                </div>
            </section>
            <style jsx="true">
                {`
                /* HeroSection.css */
                .hero-section {
                   max-height: 100%;
                    padding: 90px 0;
                    background: linear-gradient(to bottom, #1c1c1c, #0a0a0a);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    animation: fadeIn 1s ease-in;
                }

                .hero_icon {
                    display: flex;  /* Ensure the icon is a flex container */
                    justify-content: center;  /* Center horizontally */
                    align-items: center;  /* Center vertically */
                    width: 100%;  /* Allow the container to take full width */
                }

                .hero_icon img {
                    width: 80px; /* Increased size for better visibility */
                    border-radius: 10%;
                   curser: pointer;
                }

                h1 {
                    animation: slideIn 0.5s ease-out forwards; /* Text slide-in effect */
                }

                p {
                    animation: fadeInUp 0.5s ease-out forwards; /* Fade-in effect for paragraphs */
                    opacity: 0; /* Initially hidden for animation */
                }

                .btn {
                    font-size: 1.2rem;
                    transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
                }

                .btn:hover {
                    background-color: #0056b3;
                    transform: scale(1.05);
                    box-shadow: 0 4px 15px rgba(0, 86, 179, 0.5); /* Added shadow on hover */
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                    40% { transform: translateY(-10px); }
                    60% { transform: translateY(-5px); }
                }

                @keyframes slideIn {
                    from { transform: translateY(-20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                @keyframes fadeInUp {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                `}
            </style>
        </>
    );
};

export default Hero;
