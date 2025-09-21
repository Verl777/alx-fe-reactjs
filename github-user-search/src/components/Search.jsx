// src/components/Search.jsx
import { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError("Looks like we cant find the user"); // ✅ matches requirement
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex mb-4">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 flex-1 rounded-l"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 rounded-r"
        >
          Search
        </button>
      </form>

      {/* Loading state */}
      {loading && <p className="text-gray-600">Loading...</p>}

      {/* Error state */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Success state */}
      {user && (
        <div className="border rounded p-4 flex items-center space-x-4">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-lg font-bold">{user.name || user.login}</h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600"
            >
              View Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
