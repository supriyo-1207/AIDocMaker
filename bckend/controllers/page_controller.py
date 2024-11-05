from flask import (
    Flask,Blueprint, jsonify
)

page = Blueprint('page', __name__)

@page.route('/getdata', methods=['POST'])
def index():
    data = {"message": "Hello from Flask!"}
    return jsonify(data)