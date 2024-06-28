// Importing necessary libraries
import { create } from 'zustand';
import axios from 'axios';
// Defining the backend URL
const BACKEND_URL = "http://127.0.0.1:8000"

// Creating a store for uploading files
const useUploadStore = create((set) => ({
  // Function to upload a CSV file
  uploadCSV: async (file) => {
    try {
      // Creating a new form data and appending the file to it
      const formData = new FormData();
      formData.append('file', file);

      // Sending a POST request to the backend with the form data
      const response = await axios.post(`${BACKEND_URL}/upload/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // If the response contains an error, throw an error
      if (response.data.error) {
        throw new Error(response.data.error);
      }

      // If the response is successful, set the upload message
      set({ uploadMessage: response.data.message });
    } catch (error) {
      // If an error occurs, set the upload error
      set({ uploadError: error.message });
    }
  },
  // Initializing the upload message and error
  uploadMessage: '',
  uploadError: '',
}));

// Exporting the store
export default useUploadStore;
