import { create } from 'zustand';
import axios from 'axios';
import BACKEND_URL from "./urls";

// Configure axios to include credentials in requests to support CORS
axios.defaults.withCredentials = true;

const useAuthStore = create(set => ({
  token: null,
  user: null,
  profile: null,
  signIn: async (username, password) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/signin/`, { username, password });
      if (response.status === 200) {
        set({
          token: response.data.token,
          user: response.data.user,
          profile: response.data.profile
        });
      } else {
        throw new Error('Invalid Credentials');
      }
    } catch (error) {
      console.error('Error during sign in:', error);
      if (error.response && error.response.status === 301) {
        console.error('The API endpoint has moved permanently. Please update the API URL.');
      }
      throw error;
    }
  },
  signOut: () => {
    set({ token: null, user: null, profile: null });
  }
}));

export default useAuthStore