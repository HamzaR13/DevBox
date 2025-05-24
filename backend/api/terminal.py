from flask import Blueprint, request, jsonify
from datetime import datetime

terminal_bp = Blueprint("terminal", __name__)

@terminal_bp.route("/api/terminal", methods=["POST"])
def run_command():
    data = request.get_json()
    command = data.get("command", "").strip()

    if command == "help":
        return jsonify({"output": "Available commands: help, echo, date, clear"})
    elif command.startswith("echo "):
        return jsonify({"output": command[5:]})
    elif command == "date":
        now = datetime.now()
        return jsonify({"output": now.strftime("%A, %B %d, %Y, %I:%M %p")})
    elif command == "clear":
        return jsonify({"output": ""})
    else:
        return jsonify({"output": f"Unknown command: {command}"})

# increment values for analytics tracking
from api.analytics import increment_snippets  # in snippets.py
increment_snippets()