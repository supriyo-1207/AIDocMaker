import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import docsIcon from '../assets/docs.png';
import slidesIcon from '../assets/slide.png';

const Navbar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const navbarRef = useRef(null);

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    useEffect(() => {
        const navbarElement = navbarRef.current;
        if (isNavbarOpen) {
            navbarElement.style.maxHeight = navbarElement.scrollHeight + 'px';
            navbarElement.style.opacity = 1;
        } else {
            navbarElement.style.maxHeight = '0px';
            navbarElement.style.opacity = 0;
        }
    }, [isNavbarOpen]);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    {/* Left side: Logo */}
                    <Link className="navbar-brand text-light" to="/"> 
                        Aidocmaker
                    </Link>

                    {/* Toggle button for mobile view */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleNavbar}
                        aria-expanded={isNavbarOpen}
                        aria-label="Toggle navigation"
                    >
                        {isNavbarOpen ? (
                            <span>&times;</span> 
                        ) : (
                            <span className="navbar-toggler-icon"></span> 
                        )}
                    </button>

                    {/* Right side: Icons */}
                    <div 
                        ref={navbarRef} 
                        className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} 
                        id="navbarNav"
                    >
                        <div className="ml-auto d-flex flex-lg-row flex-column align-items-lg-center">
                            <Link to="/document" className="nav-link">
                                <img src={docsIcon} alt="Docs" className="icon" />
                            </Link>
                            <Link to="/slides" className="nav-link">
                                <img src={slidesIcon} alt="Slides" className="icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <style jsx="true">{`
                .navbar {
                    background: linear-gradient(to bottom, #0a0a0a, #1c1c1c);
                    color: #fff;
                    border-bottom: 1px solid rgba(255, 111, 97, 0.6);
                    transition: background 0.4s ease-in-out, box-shadow 0.4s ease;
                }

                .navbar:hover {
                    
                    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
                }

                .navbar-toggler {
                    border: none;
                    outline: none;
                    font-size: 24px;
                    color: #ff6f61;
                    transition: color 0.3s ease, transform 0.3s ease;
                }

                .navbar-toggler:hover {
                    color: #fff;
                    transform: rotate(90deg);
                }

                .navbar-brand {
                    font-size: 28px;
                    font-weight: bold;
                    color: #ff6f61;
                    transition: color 0.3s ease;
                }

                .navbar-brand:hover {
                    color: #fff;
                }

                .navbar-collapse {
                    max-height: 0;
                    opacity: 0;
                    overflow: hidden;
                    transition: max-height 0.6s ease, opacity 0.6s ease;
                }

                .navbar-collapse.show {
                    max-height: 500px; /* Large enough to accommodate the content */
                    opacity: 1;
                }

                .icon {
                    width: 30px;
                    height: auto;
                    margin-left: 20px;
                    opacity: 0.8;
                    transition: transform 0.3s ease, opacity 0.3s ease;
                }

                .icon:hover {
                    transform: scale(1.2);
                    opacity: 1;
                    filter: drop-shadow(0 0 5px #ff6f61);
                }

                .nav-link {
                    color: #ff6f61;
                    position: relative;
                    overflow: hidden;
                    transition: color 0.3s ease, text-shadow 0.3s ease;
                }

                .nav-link:hover {
                    color: #fff;
                    text-shadow: 0 0 5px #ff6f61;
                }

                .nav-link::after {
                    content: "";
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: #ff6f61;
                    transition: width 0.3s ease;
                }

                .nav-link:hover::after {
                    width: 100%;
                }

                @media (max-width: 576px) {
                    .navbar {
                        padding: 10px 15px;
                    }

                    .icon {
                        margin-left: 0;
                        margin-bottom: 10px;
                    }

                    .navbar-brand {
                        font-size: 24px;
                    }

                    .navbar-toggler span {
                        font-size: 28px;
                    }
                }

                @media (min-width: 992px) {
                    .navbar {
                        padding: 20px 40px;
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;
