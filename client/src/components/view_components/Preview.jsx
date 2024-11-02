import React from 'react';

function Preview({ content }) {
  return (
    <>
      <div className="preview-container">
        <div className="preview-content" dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>

      <style jsx="true">
        {`
        .preview-container {
          width: 50%;
          padding-left: 15px;
          border-left: 2px solid #e2e8f0;
          overflow-y: auto;
        }

        .preview-content {
          padding: 20px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
          min-height: 100%;
          white-space: pre-wrap;
          transition: all 0.3s ease;
        }

        .preview-content:hover {
          background-color: #edf2f7;
        }

        @media (max-width: 768px) {
          .preview-container {
            width: 100%;
            padding: 0;
            height: 50vh;
          }

          .preview-container {
            border-left: none;
            border-top: 1px solid #e2e8f0;
          }

          .preview-content {
            padding: 15px;
          }
        }
        `}
      </style>
    </>
  );
}

export default Preview;
