# AIDocMaker

AIDocMaker is a document generation tool powered by modern Large Language Models (LLMs) like Gemini and Llama. It provides an intuitive interface for users to create, edit, and download high-quality documents.

## Features

- **Choose LLM Models**: Select from models like Gemini and Llama for custom document generation.
- **Rich Text Editing**: Edit AI-generated content using React Quill.
- **Save & Download**: Save your edits to the backend and download documents as `.docx` files.
- **Optional Background Info**: Provide additional context to improve the quality of generated documents.

## Tech Stack

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **Bootstrap**: A CSS framework for responsive and modern UI design.
- **React Quill**: A rich text editor for editing AI-generated content.
- **Toastify**: A library for displaying notifications.
- **React Router DOM**: For handling routing in the React application.

### Backend
- **Flask**: A lightweight Python web framework.
- **Flask-CORS**: For handling Cross-Origin Resource Sharing (CORS) in Flask.
- **LangChain**: A framework for developing applications powered by language models.
- **Python-Docx**: A library for creating and updating Microsoft Word `.docx` files.

## Setup

### Frontend

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/AIDocMaker.git
   cd AIDocMaker/frontend
Install dependencies:

bash
Copy
npm install
Run the development server:

bash
Copy
npm start
Open your browser and navigate to http://localhost:3000.

Backend
Navigate to the backend directory:

bash
Copy
cd ../backend
Create a virtual environment (optional but recommended):

bash
Copy
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
Install dependencies:

bash
Copy
pip install -r requirements.txt
Run the Flask server:

bash
Copy
flask run
The backend will be running at http://localhost:5000.
