import React from 'react';
import docsIcon from '../../assets/docs.png';
import Button from '../common_components/Button';




function Header_docs({ title, showExportButton,value }) { 
      const handelExport = async () => {
            try {
              // Send GET request to Flask to fetch the docx file
              const response = await fetch('http://localhost:5000//generate-docx', {
                method: 'GET',
              });
        
              // Check if the request was successful
              if (response.ok) {
                const blob = await response.blob(); // Convert the response to a Blob
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob); // Create a URL for the Blob
                link.download = 'generated_doc.docx'; // Set the filename for the downloaded file
                link.click(); // Trigger the download
              } else {
                console.error('Failed to download file');
              }
            } catch (error) {
              console.error('Error:', error);
            }
    };

    
    return (
        <div>
            <div className="header">
                <div className="heading">
                    <img src={docsIcon} alt="Documents Icon" aria-hidden="true" />
                    <h3>{title}</h3>
                </div>

                <div className="nav d-flex justify-space-between">
                    <p>Create a report, salesheet, proposal, and more in seconds using AI.</p>
                    {showExportButton && (
                        // <button id="export-doc">Export</button>
                        <Button
                            type={"button"}
                            onClick={handelExport}
                            disabled={false}
                            ariaLabel={"Download"}
                            children={"Download"}
                            id={"export-doc"}
                            className={"btn"}
                        />
                    )}
                </div>
            </div>

            <style jsx="true">
                {`
                .header {
                    padding: 20px;
                    background: #f9f9f9;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                /* Header hover effect */
                .header:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
                }

                .heading {
                    display: flex;
                    align-items: center;
                    margin-bottom: 20px;
                }

                .heading img {
                    width: 40px;
                    height: auto;
                    margin-right: 15px;
                    opacity: 0;
                    transform: translateX(-20px);
                    animation: slideIn 0.6s forwards;
                }

                .heading h3 {
                    font-size: 1.5rem;
                    color: #333;
                    font-weight: bold;
                    position: relative;
                }

                .nav {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-top: 1px solid #ddd;
                    padding-top: 10px;
                }

                .nav p {
                    font-size: 1rem;
                    color: #666;
                    flex-grow: 1;
                    margin-right: 20px;
                }

                #export-doc {
                    background-color: #007bff;
                    color: #fff;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color 0.3s ease, transform 0.3s ease;
                }

                #export-doc:hover {
                    background-color: #0056b3;
                    transform: translateY(-3px);
                }

                /* Keyframe animations */
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                /* Responsive design */
                @media (max-width: 768px) {
                    .heading h3 {
                        font-size: 1.2rem;
                    }

                    .nav {
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    #export-doc {
                        width: 100%;
                        text-align: center;
                    }
                }
                `}
            </style>
        </div>
    );
}

export default Header_docs;
