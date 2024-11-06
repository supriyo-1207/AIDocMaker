from flask import Flask
from flask_cors import CORS
from controllers.page_controller import page  # Import the blueprint

# Create an instance of the Flask app
app = Flask(__name__)
CORS(app)

# Register the blueprint with the app
app.register_blueprint(page)

# Run the app
if __name__ == "__main__":
    app.run(debug=True)
