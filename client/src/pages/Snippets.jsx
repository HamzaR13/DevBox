import { useEffect, useState } from "react";

function Snippets() {
  const [snippets, setSnippets] = useState([]);
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");

  useEffect(() => {
    fetchSnippets();
  }, []);

  const fetchSnippets = () => {
    fetch("http://localhost:5000/api/snippets")
      .then((res) => res.json())
      .then((data) => setSnippets(data.snippets))
      .catch((err) => console.error("Failed to fetch snippets:", err));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/snippets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, code }),
    });

    // After submitting, clear the form and refresh snippets
    setTitle("");
    setCode("");
    fetchSnippets();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">📄 Code Snippets</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Snippet title"
          className="border border-gray-300 rounded px-2 py-1 mr-2"
        />
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Snippet code"
          className="border border-gray-300 rounded px-2 py-1 mr-2"
        />
        <button className="bg-blue-500 text-white px-3 py-1 rounded">
          Add
        </button>
      </form>

      {snippets.map((s) => (
        <div key={s.id} className="bg-white p-4 mb-3 rounded shadow">
          <h3 className="font-semibold">{s.title}</h3>
          <pre className="bg-gray-200 p-2 mt-1 whitespace-pre-wrap">{s.code}</pre>
        </div>
      ))}
    </div>
  );
}

export default Snippets;
