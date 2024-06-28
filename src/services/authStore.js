// Importing necessary libraries
import { create } from 'zustand';
import axios from 'axios';

// Defining the authentication URL
const authUrl = "http://localhost:5000/talentVerify"

// Configuring axios to include credentials in requests to support CORS
axios.defaults.withCredentials = true;

// Creating a store for authentication
const useAuthStore = create(set => ({
  // Initializing token, user and profile to null
  token: null,
  user: null,
  profile: null,
  // Function to sign in
  signIn: async (username, password) => {
    try {
      // Sending a POST request to the authentication URL with the provided username and password
      const response = await axios.post(`${authUrl}/signin`, { username, password });
      // If the response status is 200, update the store with the token, user and profile
      if (response.status === 200) {
        set({
          token: response.data.token,
          user: response.data.user,
          profile: response.data.profile
        });
      } else {
        // If the response status is not 200, throw an error
        throw new Error('Invalid Credentials');
      }
    } catch (error) {
      // If an error occurs during sign in, log the error
      console.error('Error during sign in:', error);
      // If the error is a 301 status code, log a message about the API endpoint moving permanently
      if (error.response && error.response.status === 301) {
        console.error('The API endpoint has moved permanently. Please update the API URL.');
      }
      // Throw the error
      throw error;
    }
  },
  // Function to sign out
  signOut: () => {
    // Set the token, user and profile to null
    set({ token: null, user: null, profile: null });
  }
}));

// Exporting the useAuthStore
export default useAuthStore