import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Edit_view({ value, setValue }) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      [{ 'font': [] }],
      ['bold', 'italic', 'underline'],
      ['image', 'code-block'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'direction': 'rtl' }],
      [{ 'align': [] }],
      [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1' }, { 'indent': '+1' }],
    ],
  };

  return (
    <>
      <div className="editor-container">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          id="editor"
          className="quill-editor"
          modules={modules}
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
          .ql-container{
          padding-bottom:35px
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