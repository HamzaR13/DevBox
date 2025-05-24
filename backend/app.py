from flask import Flask
from flask_cors import CORS

# import the Flask framework and CORS handling 
from api.snippets import snippets_bp
from api.terminal import terminal_bp
from api.analytics import analytics_bp

# importing Blueprints
app = Flask(__name__)
CORS(app)

# Register routes
app.register_blueprint(snippets_bp)
app.register_blueprint(terminal_bp)
app.register_blueprint(analytics_bp)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000, debug=True)

