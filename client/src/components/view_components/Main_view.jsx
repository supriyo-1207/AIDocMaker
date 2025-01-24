import React, { useState, useEffect } from 'react';
import Header_docs from '../docs_component/Header_docs';
import Edit_view from './Edit_view';
import Preview from './Preview';
import axios from 'axios';

function Main_view() {
  const [value, setValue] = useState(''); // State for the editor content

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/getdata');
        console.log('Response data:', response.data); // Log the entire response data

        // Access the report content directly
        if (response.data && response.data.report) {
          setValue(response.data.report); // Set the report content
        } else {
          console.warn('Unexpected response structure:', response.data);
        }
      } catch (error) {
        console.error('Error fetching the report data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run on component mount

  return (
    <>
      <div className="container views">
        <Header_docs title={'Document Editor'} showExportButton={true} value={value} />
      </div>

      <div className="container view">
        {/* Passing value and setValue to Edit_view */}
        <Edit_view value={value} setValue={setValue} />
        {/* Passing value as content prop to Preview */}
        <Preview content={value} />
      </div>

      <style jsx="true">
        {`
          .views {
            padding-top: 30px;
          }
          .view {
            display: flex;
            // height: calc(100vh - 80px);
            
            padding-top: 20px;
            box-sizing: border-box;
            margin: 20px auto;
            
          }
          @media (max-width: 768px) {
            .view {
              flex-direction: column;
              margin-top: 20px;
            }
              
          }
        `}
      </style>
    </>
  );
}

export default Main_view;
