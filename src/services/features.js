import { create } from 'zustand';
import axios from 'axios';
import BACKEND_URL from "./urls";

// Configure axios to include credentials in requests to support CORS
axios.defaults.withCredentials = true;

const useFeatureStore = create(set => ({
  employees: [],
  companies: [],
  departments: [],
  roles: [],
  fetchEmployees: async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/employees/`);
      set({ employees: response.data });
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  },
  fetchCompanies: async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/companies/`);
      set({ companies: response.data });
    } catch (error) {
      console.error('Error fetching companies:', error);
    }
  },
  fetchDepartments: async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/departments/`);
      set({ departments: response.data });
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  },
  fetchRoles: async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/roles/`);
      set({ roles: response.data });
    } catch (error) {
      console.error('Error fetching roles:', error);
    }
  },
  addRole: async (role) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/roles/`, role);
      set(state => ({ roles: [...state.roles, response.data] }));
    } catch (error) {
      console.error('Error adding role:', error);
    }
  },
  addEmployee: async (employee) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/employees/`, employee);
      set(state => ({ employees: [...state.employees, response.data] }));
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  },
  addCompany: async (company) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/companies/`, company);
      set(state => ({ companies: [...state.companies, response.data] }));
    } catch (error) {
      console.error('Error adding company:', error);
    }
  },
  addDepartment: async (department) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/departments/`, department);
      set(state => ({ departments: [...state.departments, response.data] }));
    } catch (error) {
      console.error('Error adding department:', error);
    }
  }
}));

export default useFeatureStore;
