import React from 'react'

function View_header() {
    return (
        <>
            <div class="header">
                <div>
                    <button id="write-mode">Write</button>
                    <button id="preview-mode">Preview</button>
                    <button id="export-doc">Export</button>
                </div>
                <h2>Document Editor</h2>
            </div>
            <style jsx="true">
                {` /* Header Section */
        .header {
            background-color: #f8f9fa;
            padding: 1px 20px;
            border-bottom: 1px solid #ccc;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .header button {
            margin-left: 10px;
            padding: 4px 12px;
            background-color: #007bff;
            color: white;
            border: none;
            cursor: pointer;
        }

        .header button:hover {
            background-color: #0056b3;
        }`}
            </style>
        </>
    )
}

export default View_header
