import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from '../common_components/Button';

function Edit_view({ value, setValue }) {
  const [isEdited, setIsEdited] = useState(false); // Tracks if content is edited

  const handleEditorChange = (content) => {
    setValue(content);

    // Check if the content is edited (different from initial value)
    setIsEdited(content !== value);
  };

  const handleSave = async () => {
    try {
      // Send edited content to the backend
      const response = await fetch('http://localhost:5000/saveContent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: value }),
      });

      if (response.ok) {
        console.log('Content saved successfully');
        setIsEdited(false); // Reset edited state after successful save
      } else {
        console.error('Failed to save content');
      }
    } catch (error) {
      console.error('Error saving content:', error);
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      [{ font: [] }],
      ['bold', 'italic', 'underline'],
      ['image', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
      [{ color: [] }, { background: [] }],
      [{ direction: 'rtl' }],
      [{ align: [] }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ indent: '-1' }, { indent: '+1' }],
    ],
  };

  return (
    <>
      <div className="editor-container">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={handleEditorChange}
          id="editor"
          className="quill-editor"
          modules={modules}
        />
        {isEdited && (
          <Button
            type="submit"
            onClick={handleSave}
            disabled={!isEdited}
            ariaLabel="submit"
            children="Save"
            className="btn btn-primary"
            id="save-button"
          />
        )}
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
          .ql-container {
            padding-bottom: 35px;
          }
          #save-button {
            margin-top: 10px;
            margin-bottom: 10px;
            width: 10%;
            height: 40px;
            font-size: 16px;
            font-weight: 500;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 8px;
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
