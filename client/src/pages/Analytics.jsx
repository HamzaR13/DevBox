import React, { useEffect, useState } from "react";

// Analytics component shows simple usage stats
function Analytics() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/api/analytics")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">📊 Analytics</h2>
      <p>Snippets Viewed: {stats.snippets}</p>
      <p>Commands Entered: {stats.commands}</p>
    </div>
  );
}

export default Analytics;
