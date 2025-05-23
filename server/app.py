from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

snippets = [
    {"id": 1, "title": "Hello World", "code": "print('Hello World')"},
    {"id": 2, "title": "Loop Example", "code": "for i in range(5): print(i)"}
]

analytics = {"snippets": 0, "commands": 0}

@app.route("/api/snippets", methods=["GET"])
def get_snippets():
    analytics["snippets"] += 1
    return jsonify({"snippets": snippets})

@app.route("/api/terminal", methods=["POST"])
def terminal():
    command = request.json.get("command", "")
    analytics["commands"] += 1
    if command == "help":
        return jsonify({"output": "Available: help, echo, clear, date"})
    elif command.startswith("echo "):
        return jsonify({"output": command[5:]})
    elif command == "date":
        from datetime import datetime
        return jsonify({"output": datetime.now().strftime("%A, %B %d, %Y")})
    elif command == "clear":
        return jsonify({"output": ""})
    else:
        return jsonify({"output": f"Command not found: {command}"})

@app.route("/api/analytics", methods=["GET"])
def get_analytics():
    return jsonify(analytics)

if __name__ == "__main__":
    app.run(debug=True)
