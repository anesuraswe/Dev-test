import React, { useState, useEffect } from 'react';
import useFeatureStore from '../services/features';
import Papa from 'papaparse';
import { LinearProgress } from '@mui/material';
import { FaSearch } from 'react-icons/fa';

const MainScreen = () => {
  const [csvData, setCsvData] = useState([]);
  const [fileError, setFileError] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const { addEmployee, fetchCompanies, fetchDepartments, fetchEmployees, companies, departments, employees } = useFeatureStore(state => ({
    addEmployee: state.addEmployee,
    fetchCompanies: state.fetchCompanies,
    fetchDepartments: state.fetchDepartments,
    fetchEmployees: state.fetchEmployees,
    companies: state.companies,
    departments: state.departments,
    employees: state.employees
  }));

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const fileExtension = file.name.split('.').pop().toLowerCase();
    if (file && (file.type === "text/csv" || fileExtension === "xls" || fileExtension === "xlsx")) {
      setLoading(true);
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: async (result) => {
          setCsvData(result.data);
          setFileError(null);
          let index = 0;
          for (const row of result.data) {
            if (row.company && row.name && row.employee_id && row.department && row.role && row.date_started && row.duties) {
              const employeeData = {
                company: parseInt(row.company, 10),
                name: row.name,
                employee_id: row.employee_id,
                department: parseInt(row.department, 10),
                role: row.role,
                date_started: row.date_started,
                date_left: row.date_left || null,
                duties: row.duties
              };
              await addEmployee(employeeData);
              index++;
              setUploadProgress((index / result.data.length) * 100);
            }
          }
          setLoading(false);
        },
        error: (error) => {
          setFileError(error.message);
          setLoading(false);
        }
      });
    } else {
      setFileError("Please upload a CSV file or an Excel spreadsheet.");
    }
  };

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('companies');

  useEffect(() => {
    switch (filter) {
      case 'companies':
        fetchCompanies(searchQuery).then(() => setData(companies));
        break;
      case 'departments':
        fetchDepartments(searchQuery).then(() => setData(departments));
        break;
      case 'employees':
        fetchEmployees(searchQuery).then(() => setData(employees));
        break;
      default:
        setData([]);
    }
  }, [filter, fetchCompanies, fetchDepartments, fetchEmployees, companies, departments, employees, searchQuery]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      let filteredSuggestions = [];
      switch (filter) {
        case 'companies':
          filteredSuggestions = companies.filter(company => company.name.toLowerCase().includes(query.toLowerCase()));
          break;
        case 'departments':
          filteredSuggestions = departments.filter(department => department.name.toLowerCase().includes(query.toLowerCase()));
          break;
        case 'employees':
          filteredSuggestions = employees.filter(employee => employee.name.toLowerCase().includes(query.toLowerCase()));
          break;
        default:
          filteredSuggestions = [];
      }
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
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
    <div className="bg-gray-100 items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Talent Verify</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full">
        <div className='flex mb-4'>
          <div>
            <form action="">
              <div className="mb-4">
                <label htmlFor="CSV" className="block text-sm font-medium text-gray-700 mb-2">CSV File</label>
                <input type="file" id="CSV" onChange={handleFileUpload} name="CSV" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" accept=".csv" />
                {loading && <LinearProgress variant="determinate" value={uploadProgress} />}
              </div>
            </form>
          </div>
          <div>
            <select onChange={handleFilterChange} className="mb-4 p-2 rounded justify-end">
              <option value="companies">Companies</option>
              <option value="departments">Departments</option>
              <option value="employees">Employees</option>
            </select>
          </div>
          <div className="w-full max-w-md mx-auto">
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 outline-none"
              placeholder="Search..."
            />
            <div className="px-4 text-gray-500">
              <FaSearch />
            </div>
          </div>
          {suggestions.length > 0 && (
            <ul className="border border-gray-300 rounded-lg mt-2 bg-white shadow-sm">
              {suggestions.map((suggestion, index) => (
                <li key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-100" onClick={() => setSearchQuery(suggestion.name)}>
                  {suggestion.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        </div>
        
        {data.length > 0 && (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-sm overflow-hidden shadow-lg">
              <thead className='bg-gray-900 text-white uppercase text-sm leading-normal'>
                <tr>
                  <th className="py-3 px-6 text-left"> <div className='flex items-center'> Name</div></th>
                  {filter === 'companies' && (
                    <>
                      <th className="py-3 px-6 text-left"><div className='flex items-center'> Registration Number</div></th>
                      <th className="py-3 px-6 text-left"><div className='flex items-center'> Address</div></th>
                      <th className="py-3 px-6 text-left"><div className='flex items-center'> Contact Person</div></th>
                      <th className="py-3 px-6 text-left"><div className='flex items-center'> Contact Phone</div></th>
                      <th className="py-3 px-6 text-left"><div className='flex items-center'> Email </div></th>
                    </>
                  )}
                  {filter === 'departments' && (
                    <th className="py-3 px-6 text-left"> <div className='flex items-center'>Company </div></th>
                  )}
                  {filter === 'employees' && (
                    <>
                      <th className="py-3 px-6 text-left"> <div className='flex items-center'>Employee ID </div></th>
                      <th className="py-3 px-6 text-left"><div className='flex items-center'> Role</div></th>
                      <th className="py-3 px-6 text-left"><div className='flex items-center'> Date Started</div></th>
                      <th className="py-3 px-6 text-left"> <div className='flex items-center'> Employment Status</div></th>
                      <th className="py-3 px-6 text-left"> <div className='flex items-center'> Duties</div></th>
                      <th className="py-3 px-6 text-left"><div className='flex items-center'> Department </div></th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody className='text-gray-900 text-sm font-medium'>
                {data.map((item, index) => (
                  <tr key={index} className="border-b border-blue-200 ">
                    <td className="py-3 px-6 text-left whitespace-nowrap">{item.name}</td>
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
