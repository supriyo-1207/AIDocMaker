# AIDocMaker

AIDocMaker is a document generation tool powered by modern Large Language Models (LLMs) like Gemini and Llama. It provides an easy-to-use interface for creating, editing, and downloading high-quality documents. Users can generate content with AI, edit it with a rich text editor, and save their work as `.docx` files.

## Key Features

- **Model Selection**: Choose between Gemini, Llama, and other models for customized document generation.
- **Rich Text Editing**: Edit your AI-generated content using an intuitive React Quill editor.
- **Save & Download**: Save your document to the backend and download it as a `.docx` file.
- **Custom Context**: Provide additional background information to improve document quality.

## Tech Stack

- **Frontend**: React, Bootstrap, React Quill, React Router DOM
- **Backend**: Flask, LangChain, Python-Docx, Flask-CORS
- **UI Libraries**: Toastify for notifications, React Quill for text editing
- **Models**: Gemini, Llama (Customizable with LangChain)

## Setup Guide

### Prerequisites

Before you begin, ensure that you have the following installed on your system:

- **Node.js** (Frontend)
- **npm** (Frontend package manager)
- **Python 3.x** (Backend)
- **pip** (Python package manager)

### Frontend Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/supriyo-1207/AIDocMaker.git
    cd AIDocMaker/frontend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the frontend server**:
    ```bash
    npm start
    ```
    Visit `http://localhost:3000` in your browser to access the frontend.

### Backend Setup

1. **Navigate to the backend directory**:
    ```bash
    cd ../backend
    ```

2. **Create and activate a virtual environment** (optional but recommended):
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```

3. **Install the required Python packages**:
    ```bash
    pip install -r requirements.txt
    ```

4. **Run the Flask server**:
    ```bash
    flask run
    ```
    The backend will now be running at `http://localhost:5000`.

### Configuration

- Set up environment variables in a `.env` file in the backend directory:
    ```
   
    ```

## Usage

Once the server is running:

1. **Generate Document**: Choose your desired AI model (e.g., Gemini, Llama) and provide any background information. Click on the generate button to get your document content.
2. **Edit Content**: Use the React Quill editor to modify the AI-generated content.
3. **Save and Download**: Once satisfied with the document, save it to the backend and download the final `.docx` file.

## Folder Structure

