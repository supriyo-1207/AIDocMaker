import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Edit_view({ value, setValue }) {
  return (
    <>
      <div className="editor-container">
        <ReactQuill 
          theme="snow" 
          value={value} 
          onChange={setValue} 
          id="editor" 
          className="quill-editor"
        />
      </div>

      <style jsx="true">
        {`
        .editor-container {
          width: 51%;
          padding-right: 15px;
          display: flex;
          flex-direction: column;
        }

        .quill-editor {
          flex-grow: 1;
          background-color: white;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          overflow: hidden;
          min-height: 500px;
          padding: 10px;
        }

        @media (max-width: 768px) {
          .editor-container {
            width: 100%;
            padding: 0;
            height: 100vh;
           display: none;
          }
        }
        `}
      </style>
    </>
  );
}

export default Edit_view;
