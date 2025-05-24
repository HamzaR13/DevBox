import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-4xl font-bold mb-4">📦 DevBox</h1>

      <p className="text-gray-500 mb-3 max-w-md">
        Welcome to DevBox Lite, your mini developer toolbox!
      </p>

      <p className="text-gray-500 mb-6 max-w-md">
        Use the links below to navigate and explore the different features:
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/snippets"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          View Snippets
        </Link>

        <Link
          to="/terminal"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Open Terminal
        </Link>

        <Link
          to="/analytics"
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
        >
          View Analytics
        </Link>
      </div>
    </div>
  );
}

export default Home;
