import { useState } from "react";

function Terminal() {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/terminal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ command }),
    });

    const data = await res.json();
    setOutput([...output, `> ${command}`, data.output]);
    setCommand("");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">🖥 Terminal</h2>
      <div className="bg-black text-green-400 p-4 h-64 overflow-y-auto rounded mb-2 font-mono text-sm">
        {output.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder="Type a command..."
          className="w-full p-2 border border-gray-300 rounded"
        />
      </form>
    </div>
  );
}

export default Terminal;
