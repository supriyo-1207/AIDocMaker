from flask import Flask, Blueprint, jsonify, request
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain_google_genai import ChatGoogleGenerativeAI
import os
from dotenv import load_dotenv  # Import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Initialize Flask app and Blueprint
app = Flask(__name__)
page = Blueprint('page', __name__)

# Ensure your Google API key is set correctly in your environment variables
os.environ["GOOGLE_API_KEY"] = os.getenv("GOOGLE_API_KEY")

# Initialize the LLM model
llm = ChatGoogleGenerativeAI(model="gemini-pro")

# Define the report template
report_template = """Generate a professional report on the following topic:
Topic: {topic}

Requirements:
1. Provide an introduction.
2. Add key details with bullet points.
3. Conclude with actionable insights.
"""

# Create a Prompt Template
prompt = PromptTemplate(
    input_variables=["topic"],
    template=report_template,
)

# Create an LLM Chain
analysis_chain = LLMChain(prompt=prompt, llm=llm)

# Register the Blueprint
app.register_blueprint(page)

@page.route('/getdata', methods=['POST'])
def gemini():
    data = request.get_json()
    
    # Check if the topic is provided
    topic = data.get('instructions')
    if not topic:
        return jsonify({"error": "Topic is required"}), 400  # Return 400 Bad Request if topic is missing
    
    # Generate the output
    output = analysis_chain.run(topic=topic)
    
    # Return the generated report
    return jsonify({"report": output}), 200  # Return 200 OK with the report

