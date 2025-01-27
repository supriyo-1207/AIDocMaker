# **AIDocMaker**

AIDocMaker is a document generation tool powered by modern LLMs like Gemini and Llama. Users can create, edit, and download high-quality documents through an intuitive interface.

---

## **Features**
- **Choose LLM Models**: Select from models like Gemini and Llama for custom document generation.
- **Rich Text Editing**: Edit AI-generated content with React Quill.
- **Save & Download**: Save edits to the backend and download documents as `.docx` files.
- **Optional Background Info**: Provide additional context for better results.

---

## **Tech Stack**
- **Frontend**: React, Bootstrap, React Quill, Toastify, React Router DOM
- **Backend**: Flask, Flask-CORS, LangChain, Python-Docx


---

## **Setup**

### **Frontend**
1. Clone and navigate to the `client` folder:
   ```bash
   git clone https://github.com/your-username/aidocmaker.git
   cd aidocmaker/frontend
   npm install
   npm run dev
2.Navigate to the `backend` folder
  ```bash
  cd aidocmaker/backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
FLASK_ENV=development
GEMINI_API_KEY=your_api_key
flask run

