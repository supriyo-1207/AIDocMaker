from flask import (
    Flask,Blueprint
)

page = Blueprint('page', __name__)

@page.route('/')
def index():
    return ("hello ")