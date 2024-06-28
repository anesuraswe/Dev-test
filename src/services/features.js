// Importing necessary libraries and setting up the backend URL
import { create } from 'zustand'; // Zustand is a state management library for React
import axios from 'axios'; // Axios is a library for making HTTP requests
import BACKEND_URL from "./urls"; // Importing the backend URL from a separate file

// Configuring axios to include credentials in requests to support CORS
axios.defaults.withCredentials = true; // This allows axios to send cookies with requests

// Creating a store for managing state and actions related to features
const useFeatureStore = create(set => ({
  // Initial state for the store
  employees: [], // Array to hold employee data
  companies: [], // Array to hold company data
  departments: [], // Array to hold department data
  roles: [], // Array to hold role data

  // Action to fetch employees from the backend
  fetchEmployees: async (searchQuery = '') => {
    try {
      // Making a GET request to the backend to fetch employees
      const response = await axios.get(`${BACKEND_URL}/api/employees/`, {
        params: { search: searchQuery } // Passing search query as a parameter
      });
      // Updating the state with the fetched employees
      set({ employees: response.data });
    } catch (error) {
      console.error('Error fetching employees:', error); // Logging error if any
    }
  },

  // Action to fetch companies from the backend
  fetchCompanies: async (searchQuery = '') => {
    try {
      // Making a GET request to the backend to fetch companies
      const response = await axios.get(`${BACKEND_URL}/api/companies/`, {
        params: { search: searchQuery } // Passing search query as a parameter
      });
      // Updating the state with the fetched companies
      set({ companies: response.data });
    } catch (error) {
      console.error('Error fetching companies:', error); // Logging error if any
    }
  },

  // Action to fetch departments from the backend
  fetchDepartments: async (searchQuery = '') => {
    try {
      // Making a GET request to the backend to fetch departments
      const response = await axios.get(`${BACKEND_URL}/api/departments/`, {
        params: { search: searchQuery } // Passing search query as a parameter
      });
      // Updating the state with the fetched departments
      set({ departments: response.data });
    } catch (error) {
      console.error('Error fetching departments:', error); // Logging error if any
    }
  },

  // Action to fetch roles from the backend
  fetchRoles: async (searchQuery = '') => {
    try {
      // Making a GET request to the backend to fetch roles
      const response = await axios.get(`${BACKEND_URL}/api/roles/`, {
        params: { search: searchQuery } // Passing search query as a parameter
      });
      // Updating the state with the fetched roles
      set({ roles: response.data });
    } catch (error) {
      console.error('Error fetching roles:', error); // Logging error if any
    }
  },

  // Action to add a new role to the backend
  addRole: async (role) => {
    try {
      // Making a POST request to the backend to add a new role
      const response = await axios.post(`${BACKEND_URL}/api/roles/`, role);
      // Updating the state by adding the new role to the existing roles
      set(state => ({ roles: [...state.roles, response.data] }));
    } catch (error) {
      console.error('Error adding role:', error); // Logging error if any
    }
  },

  // Action to add a new employee to the backend
  addEmployee: async (employee) => {
    try {
      // Making a POST request to the backend to add a new employee
      const response = await axios.post(`${BACKEND_URL}/api/employees/`, employee);
      // Updating the state by adding the new employee to the existing employees
      set(state => ({ employees: [...state.employees, response.data] }));
    } catch (error) {
      console.error('Error adding employee:', error); // Logging error if any
    }
  },

  // Action to add a new company to the backend
  addCompany: async (company) => {
    try {
      // Making a POST request to the backend to add a new company
      const response = await axios.post(`${BACKEND_URL}/api/companies/`, company);
      // Updating the state by adding the new company to the existing companies
      set(state => ({ companies: [...state.companies, response.data] }));
    } catch (error) {
      console.error('Error adding company:', error); // Logging error if any
    }
  },

  // Action to add a new department to the backend
  addDepartment: async (department) => {
    try {
      // Making a POST request to the backend to add a new department
      const response = await axios.post(`${BACKEND_URL}/api/departments/`, department);
      // Updating the state by adding the new department to the existing departments
      set(state => ({ departments: [...state.departments, response.data] }));
    } catch (error) {
      console.error('Error adding department:', error); // Logging error if any
    }
  }
}));

// Exporting the useFeatureStore hook for use in other parts of the application
export default useFeatureStore;
