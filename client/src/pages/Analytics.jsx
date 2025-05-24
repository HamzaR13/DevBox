import { useEffect, useState } from "react";

function Analytics() {
  const [stats, setStats] = useState({ snippets: 0, commands: 0 });

  useEffect(() => {
    fetch("http://localhost:5000/api/analytics")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error("Failed to fetch analytics:", err));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">📊 Usage Analytics</h2>
      <ul className="list-disc ml-5">
        <li>Snippets Viewed: {stats.snippets}</li>
        <li>Commands Run: {stats.commands}</li>
      </ul>
    </div>
  );
}

export default Analytics;
