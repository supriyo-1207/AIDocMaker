from flask import Blueprint, jsonify, request
from langchain.prompts import PromptTemplate
from langchain_google_genai import ChatGoogleGenerativeAI
import os
import markdown2
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Create a Blueprint instance
page = Blueprint('page', __name__)

# Initialize the LLM model
os.environ["GOOGLE_API_KEY"] = os.getenv("GOOGLE_API_KEY")
llm = ChatGoogleGenerativeAI(model="gemini-pro")

# Define the report template
report_template = """Generate a professional report on the following topic: Topic: {topic}

Requirements:
1. Provide an introduction.
2. Add key details with bullet points.
3. Conclude with actionable insights."""

# Create a Prompt Template
prompt = PromptTemplate(
    input_variables=["topic"],
    template=report_template,
)

# Use RunnableSequence syntax by combining prompt and llm
analysis_chain = prompt | llm

class ResultManager:
    _instance = None
    
    def __new__(cls):
        if not cls._instance:
            cls._instance = super(ResultManager, cls).__new__(cls)
            cls._instance.result = ""
            cls._instance.edited_content = None
        return cls._instance
    
    def set_result(self, content):
        self.result = content
    
    def set_edited_content(self, content):
        self.edited_content = content
    
    def get_result(self):
        return self.edited_content or self.result

# Create a single instance
result_manager = ResultManager()

@page.route('/getdata', methods=['POST'])
def gemini():
    data = request.get_json()
    
    # Get the topic and background from the request
    topic = data.get('instructions')
    background = data.get('background')
    
    # Check if the topic is provided
    if not topic:
        return jsonify({"error": "Topic is required"}), 400
    
    # Append background information to the topic if provided
    if background:
        topic += f"\n\nBackground: {background}"
    
    # Generate the output by invoking the chain
    output = analysis_chain.invoke({"topic": topic})
    
    # Extract the generated text from the AIMessage object
    generated_text = output.content
    
    # Convert the generated text to markdown
    result = markdown2.markdown(generated_text)
    
    # Store the result
    result_manager.set_result(result)
    
    return jsonify({"report": result}), 200

@page.route('/getdata', methods=['GET'])
def getdata():
    current_result = result_manager.get_result()
    return jsonify({"report": current_result}), 200

@page.route('/saveContent', methods=['POST'])
def save_content():
    data = request.get_json()
    
    if data and "content" in data:
        result_manager.set_edited_content(data["content"])
        return jsonify({"message": "Content saved successfully"}), 200
    else:
        return jsonify({"error": "No content provided"}), 400