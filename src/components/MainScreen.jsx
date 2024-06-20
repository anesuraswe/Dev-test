import React, { useState, useEffect } from 'react';
import useFeatureStore from '../services/features';

const MainScreen = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('companies');
  const { companies, departments, employees, fetchCompanies, fetchDepartments, fetchEmployees } = useFeatureStore(state => ({
    companies: state.companies,
    departments: state.departments,
    employees: state.employees,
    fetchCompanies: state.fetchCompanies,
    fetchDepartments: state.fetchDepartments,
    fetchEmployees: state.fetchEmployees
  }));

  useEffect(() => {
    switch (filter) {
      case 'companies':
        fetchCompanies().then(() => setData(companies));
        break;
      case 'departments':
        fetchDepartments().then(() => setData(departments));
        break;
      case 'employees':
        fetchEmployees().then(() => setData(employees));
        break;
      default:
        setData([]);
    }
  }, [filter, fetchCompanies, fetchDepartments, fetchEmployees, companies, departments, employees]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const renderDetails = (item) => {
    switch (filter) {
      case 'companies':
        return (
          <>
            <td>{item.registration_number}</td>
            <td>{item.address}</td>
            <td>{item.contact_person}</td>
            <td>{item.contact_phone}</td>
            <td>{item.email}</td>
          </>
        );
      case 'departments':
        return (
          <>
            <td>{item.company}</td>
          </>
        );
      case 'employees':
        return (
          <>
            <td>{item.employee_id}</td>
            <td>{item.role}</td>
            <td>{item.date_started}</td>
            <td>{item.date_left || 'Current'}</td>
            <td>{item.duties}</td>
            <td>{item.department}</td>
          </>
        );
      default:
        return <td>No data</td>;
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl w-full">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Talent Verify</h1>
        <select onChange={handleFilterChange} className="mb-4 p-2 border rounded">
          <option value="companies">Companies</option>
          <option value="departments">Departments</option>
          <option value="employees">Employees</option>
        </select>
        {data.length > 0 && (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Name</th>
                  {filter === 'companies' && (
                    <>
                      <th className="py-2 px-4 border-b">Registration Number</th>
                      <th className="py-2 px-4 border-b">Address</th>
                      <th className="py-2 px-4 border-b">Contact Person</th>
                      <th className="py-2 px-4 border-b">Contact Phone</th>
                      <th className="py-2 px-4 border-b">Email</th>
                    </>
                  )}
                  {filter === 'departments' && (
                    <th className="py-2 px-4 border-b">Company</th>
                  )}
                  {filter === 'employees' && (
                    <>
                      <th className="py-2 px-4 border-b">Employee ID</th>
                      <th className="py-2 px-4 border-b">Role</th>
                      <th className="py-2 px-4 border-b">Date Started</th>
                      <th className="py-2 px-4 border-b">Employment Status</th>
                      <th className="py-2 px-4 border-b">Duties</th>
                      <th className="py-2 px-4 border-b">Department</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">{item.name}</td>
                    {renderDetails(item)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainScreen;
