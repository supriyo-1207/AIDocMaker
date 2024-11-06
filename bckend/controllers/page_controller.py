from flask import Blueprint, jsonify, request
from langchain.prompts import PromptTemplate
from langchain_google_genai import ChatGoogleGenerativeAI
import os
from dotenv import load_dotenv
import markdown2

# Load environment variables
load_dotenv()

# Create a Blueprint instance
page = Blueprint('page', __name__)

# Initialize the LLM model
os.environ["GOOGLE_API_KEY"] = os.getenv("GOOGLE_API_KEY")
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

# Use RunnableSequence syntax by combining prompt and llm
analysis_chain = prompt | llm

# Define the route
@page.route('/getdata', methods=['POST'])
def gemini():
    data = request.get_json()
    print(data)
    
    # Check if the topic is provided
    topic = data.get('instructions', 'hello')  # default topic for testing
    if not topic:
        return jsonify({"error": "Topic is required"}), 400
    
    # Generate the output by invoking the chain
    output = analysis_chain.invoke({"topic": topic})
    result = markdown2.markdown(str(output))

    print(result)
    # Return the generated report
    return jsonify({"report": result}), 200
