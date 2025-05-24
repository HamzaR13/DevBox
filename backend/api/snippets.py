from flask import Blueprint, jsonify, request

snippets_bp = Blueprint("snippets", __name__)

snippets = [
    {"id": 1, "title": "Hello World", "code": "print('Hello World')"},
    {"id": 2, "title": "Loop", "code": "for i in range(5): print(i)"}
]

@snippets_bp.route("/api/snippets", methods=["GET"])
def get_snippets():
    return jsonify({"snippets": snippets})

@snippets_bp.route("/api/snippets", methods=["POST"])
def create_snippet():
    data = request.get_json()
    new_id = len(snippets) + 1
    new_snippet = {
        "id": new_id,
        "title": data.get("title", f"Snippet {new_id}"),
        "code": data.get("code", "")
    }
    snippets.append(new_snippet)
    return jsonify({"message": "Snippet created!", "snippet": new_snippet}), 201
