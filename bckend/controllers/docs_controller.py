from flask import Blueprint, send_file, jsonify
from docx import Document
from bs4 import BeautifulSoup
from controllers.page_controller import result_manager
import os

# Create a Blueprint instance for docs
docs = Blueprint('docs', __name__)

# Function to generate the docx from HTML content
def generate_docx_from_html(html_content):
    # Create a new Document
    doc = Document()
    
    # Ensure content is a string
    html_content = str(html_content)
    
    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Iterate through the parsed HTML and handle different tags
    for element in soup.find_all(True):  # Find all tags
        if element.name == 'h1':
            doc.add_paragraph(element.get_text(), style='Heading 1')
        elif element.name == 'h2':
            doc.add_paragraph(element.get_text(), style='Heading 2')
        elif element.name == 'h3':
            doc.add_paragraph(element.get_text(), style='Heading 3')
        elif element.name == 'ul':
            for li in element.find_all('li'):
                doc.add_paragraph(li.get_text(), style='List Bullet')
        elif element.name == 'ol':
            for li in element.find_all('li'):
                doc.add_paragraph(li.get_text(), style='List Number')
        elif element.name == 'strong':
            para = doc.add_paragraph()
            run = para.add_run(element.get_text())
            run.bold = True
        elif element.name == 'em':
            para = doc.add_paragraph()
            run = para.add_run(element.get_text())
            run.italic = True
        elif element.name == 'u':
            para = doc.add_paragraph()
            run = para.add_run(element.get_text())
            run.underline = True
        else:
            doc.add_paragraph(element.get_text())
    
    # Ensure the output directory exists
    os.makedirs('outputs', exist_ok=True)
    
    # Save the document to a file in the outputs directory
    docx_file = os.path.join('outputs', 'generated_doc.docx')
    doc.save(docx_file)
    
    return docx_file

# Generate the docx route
@docs.route('/generate-docx', methods=['GET'])
def generate_docx():
    # Get the current result
    content_to_use = result_manager.get_result()
    
    # Check if content exists
    if not content_to_use:
        return jsonify({"error": "No content available"}), 400
    
    try:
        # Generate the docx file from the content
        docx_file = generate_docx_from_html(content_to_use)
        
        # Send the file as a response
        return send_file(docx_file, as_attachment=True, download_name='generated_report.docx')
    except Exception as e:
        print(f"Error generating DOCX: {e}")
        return jsonify({"error": str(e)}), 500