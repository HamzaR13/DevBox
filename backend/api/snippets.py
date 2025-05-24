from flask import Blueprint, jsonify

snippets_bp = Blueprint("snippets", __name__)

snippets = [
    {"id": 1, "title": "Hello World", "code": "print('Hello World')"},
    {"id": 2, "title": "Loop", "code": "for i in range(5): print(i)"}
]

@snippets_bp.route("/api/snippets", methods=["GET"])
def get_snippets():
    return jsonify({"snippets": snippets})
