// Importing necessary libraries
import { create } from 'zustand';
import axios from 'axios';

// Defining the backend URL
const BACKEND_URL = "http://127.0.0.1:8000";

// Configuring axios to include credentials in requests to support CORS
axios.defaults.withCredentials = true;

// Creating a zustand store for managing all data
const useAllDataStore = create(set => ({
  // Initializing state with empty arrays for each data type
  employees: [],
  companies: [],
  departments: [],
  roles: [],
  profiles: [],
  // Function to fetch all data from the backend
  fetchAllData: async () => {
    try {
      // Sending a GET request to the backend to fetch all data
      const response = await axios.get(`${BACKEND_URL}/viewAll/`);
      // Updating the state with the fetched data
      set({
        employees: response.data.employees,
        companies: response.data.companies,
        departments: response.data.departments,
        roles: response.data.roles,
        profiles: response.data.profiles
      });
    } catch (error) {
      // Logging any errors that occur during data fetching
      console.error('Error fetching all data:', error);
    }
  }
}));

// Exporting the useAllDataStore hook
export default useAllDataStore;
