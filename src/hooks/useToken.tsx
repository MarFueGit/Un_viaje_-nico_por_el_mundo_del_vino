import { useState } from "react";
// Define a custom hook to manage token
const useToken = () => {
  // Use state to store token
  const [token, setToken] = useState<string | null>(null);

  // Function to set token in sessionStorage
  const saveToken = (userToken: string) => {
    sessionStorage.setItem("token", userToken); // Store token in sessionStorage
    setToken(userToken); // Set token in state
  };

  // Function to get token from sessionStorage
  const getToken = () => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken); // Set token in state
    }
    return storedToken;
  };

  // Function to remove token from sessionStorage
  const removeToken = () => {
    sessionStorage.removeItem("token"); // Remove token from sessionStorage
    setToken(null); // Clear token from state
  };

  // Return token state and utility functions
  return { token, saveToken, getToken, removeToken };
};

export default useToken;
