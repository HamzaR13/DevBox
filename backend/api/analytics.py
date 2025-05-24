from flask import Blueprint, jsonify

analytics_bp = Blueprint("analytics", __name__)

stats = {
    "snippets": 0,
    "commands": 0
}

@analytics_bp.route("/api/analytics", methods=["GET"])
def get_analytics():
    return jsonify(stats)

# These can be used by other routes
def increment_snippets():
    stats["snippets"] += 1

def increment_commands():
    stats["commands"] += 1
