import React, { useState } from "react";

// Terminal component simulates a basic shell
function Terminal() {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState([]);

  const handleCommand = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/terminal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ command }),
    });
    const data = await res.json();
    setHistory([...history, `> ${command}`, data.output]);
    setCommand("");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">🖥 Terminal</h2>
      <div className="bg-black text-green-400 p-4 rounded mb-2 h-64 overflow-y-auto font-mono">
        {history.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </div>
      <form onSubmit={handleCommand}>
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder="Type command..."
          className="p-2 border rounded w-full"
        />
      </form>
    </div>
  );
}

export default Terminal;
