import React, { useEffect, useState } from 'react';
import Select from '../common_components/Select';
import Button from '../common_components/Button';
import TextArea from '../common_components/Textarea';
import Header_docs from './Header_docs';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Main_doc() {
    const [model, setModel] = useState('gpt-4-mini');
    const [background, setBackground] = useState('');
    const [instructions, setInstructions] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(model, instructions, background);
        try {
            const response = await axios.post(
                'http://localhost:5000/getdata',
                {
                    model: model,
                    instructions: instructions,
                    background: background
                },
                {
                    headers: {
                        'Content-Type': 'application/json' // Ensure content type is JSON
                    }
                }
            );
            console.log("response", response);
            if (response.status === 200) {
                navigate('/view/');
            }
        } catch (error) {
            console.error(error);
        }
    };
    

    const handleChange = (event) => {
        setModel(event.target.value);
    };

    const options = [
        { value: 'gpt-4-mini', label: 'gpt-4-mini' },
        { value: 'gpt-4', label: 'gpt-4' },
        { value: 'gemini-pro', label: 'gemini-pro' },
    ];

    return (
        <>
            <div className="container main">
                <Header_docs title={'Generate Document'} showExportButton={false} />

                <div className="card">
                    <h5>
                        <i className="fa fa-pencil-square-o pencil_icon" aria-hidden="true" style={{ marginRight: '8px' }}></i>
                        Instruction for AI
                    </h5>
                    <p>Select GPT model, and provide instructions to AI for creating document.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="model">Model / Chatbot</label>
                            <Select
                                options={options}
                                value={model}
                                onChange={handleChange}
                                label="Select AI model"
                                className="form-control"
                                id="model"
                                aria_label="Select AI model"
                            />
                        </div>

                        <TextArea
                            label="Background (Optional)"
                            value={background}
                            onChange={(e) => setBackground(e.target.value)}
                            placeholder="Enter background info..."
                            id="background"
                            aria_label="Background information"
                        />

                        <TextArea
                            label="Instructions"
                            value={instructions}
                            onChange={(e) => setInstructions(e.target.value)}
                            placeholder="Enter your instructions..."
                            id="instructions"
                            required
                            aria_label="Instructions"
                        />

                        <div className="button-container">
                            <Button
                                type="submit"
                                id="submit-btn"
                                className="btn-primary btn-block"
                                ariaLabel="Generate Document" 
                                children={"Generate Document"}
                                
                            >
                               
                            </Button>
                        </div>
                    </form>
                </div>
            </div>

            <style jsx="true">{`
                .main {
                    margin: 30px auto;
                    
                }
                 .pencil_icon{
                color:red;
                }
                .card {
                    padding: 25px;
                    border-radius: 12px;
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
                    background-color: #fff;
                    transition: box-shadow 0.3s ease, transform 0.3s ease;
                    margin-top: 30px;
                }

                .card:hover {
                    transform: translateY(-5px); /* Lift effect */
                    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2); /* Stronger shadow */
                }

                .form-group {
                    margin-bottom: 20px;
                }
                     .form-group label {
                 font-weight: bold;
            }

                .btn-primary {
                    background-color: #007bff;
                    border: none;
                    width: 100%;
                    padding: 10px 20px;
                    font-size: 1.1rem;
                    transition: background-color 0.4s ease, transform 0.3s ease;
                    border-radius: 8px;
                }

                .btn-primary:hover {
                    background: linear-gradient(135deg, #0056b3, #007bff); /* Gradient on hover */
                    transform: scale(1.05); /* Slight scale up on hover */
                }

                .btn-primary:disabled {
                    background-color: #6c757d;
                    cursor: not-allowed;
                }

                .container.main p {
                    font-size: 1rem;
                    color: #333;
                    margin-bottom: 20px;
                }

                .button-container {
                    text-align: center;
                    margin-top: 20px;
                }

                /* Spinner for loading state */
                .btn-primary:disabled:after {
                    content: '';
                    display: inline-block;
                    width: 16px;
                    height: 16px;
                    border: 2px solid transparent;
                    border-top-color: white;
                    border-radius: 50%;
                    animation: spin 0.8s linear infinite;
                    margin-left: 10px;
                    vertical-align: middle;
                }

                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @media (min-width: 576px) {
                    #submit-btn {
                        width: 200px;
                    }
                }

                @media (max-width: 768px) {
                    .btn-primary {
                        font-size: 1rem;
                        padding: 8px 16px;
                    }
                }
            `}</style>
        </>
    );
}

export default Main_doc;
