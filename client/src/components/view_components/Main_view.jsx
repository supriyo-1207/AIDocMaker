import React, { useState } from 'react';
import Header_docs from '../docs_component/Header_docs';
import Edit_view from './Edit_view';
import Preview from './Preview';

function Main_view() {
  const [value, setValue] = useState(''); // State for the editor content

  return (
    <>
      <div className="container views">
        <Header_docs title={'Document Editor'} showExportButton={true} />
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
          height: calc(100vh - 80px);
          padding: 20px;
          box-sizing: border-box;
        }
        @media (max-width: 768px) {
          .view {
            flex-direction: column;
          }
        }
        `}
      </style>
    </>
  );
}

export default Main_view;
