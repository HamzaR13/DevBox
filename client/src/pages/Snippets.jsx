import React, { useEffect, useState } from "react";

// Snippets component fetches code snippets from Flask backend
function Snippets() {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/snippets")
      .then((res) => res.json())
      .then((data) => setSnippets(data.snippets));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">📄 Code Snippets</h2>
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
