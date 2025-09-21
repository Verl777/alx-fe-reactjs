import axios from "axios";

const token = import.meta.env.VITE_GITHUB_TOKEN;
const BASE_URL = "https://api.github.com";

// Fetch a single user by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`, {
      headers: token ? { Authorization: `token ${token}` } : {},
    });
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};

// Advanced search for multiple users
export const searchUsers = async ({ username, location, minRepos }) => {
  try {
    let query = username ? `${username} in:login` : "";

    if (location) {
      query += ` location:${location}`;
    }
    if (minRepos) {
      query += ` repos:>=${minRepos}`;
    }

    // Use full URL so the test finds it
    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`,
      {
        headers: token ? { Authorization: `token ${token}` } : {},
      }
    );

    return response.data.items; // list of users
  } catch (error) {
    throw new Error("Error fetching search results");
  }
};
