import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Snippets from "./pages/Snippets";
import Terminal from "./pages/Terminal";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <Router>
      <div className="p-6 font-mono bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">📦 DevBox Lite</h1>
        <nav className="mb-4 space-x-4">
          <Link to="/">Snippets</Link>
          <Link to="/terminal">Terminal</Link>
          <Link to="/analytics">Analytics</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Snippets />} />
          <Route path="/terminal" element={<Terminal />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
