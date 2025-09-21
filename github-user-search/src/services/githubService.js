// src/services/githubService.js
import axios from "axios";

// Function to fetch user data from GitHub API
export async function fetchUserData(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; // returns the user object
  } catch (error) {
    throw error; // let the component handle errors
  }
}
