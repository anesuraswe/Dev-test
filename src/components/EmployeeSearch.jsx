// import React, { useState, useEffect } from 'react';
import { getEmployees } from '../services/apiService';

const EmployeeSearch = () => {
    // const [searchTerm, setSearchTerm] = useState('');
    // const [employees, setEmployees] = useState([]);

    // useEffect(() => {
    //     getEmployees().then(response => setEmployees(response.data));
    // }, []);

    // const handleSearch = (e) => {
    //     setSearchTerm(e.target.value);
    // };

    // const filteredEmployees = employees.filter(employee =>
    //     employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    return (
        <div className='bg-gray-100 flex items-center justify-center min-h-screen'>
            <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Talent Verify</h1>
        <form action="">
            <div className="mb-4">
                <label htmlFor="CSV" className="block text-sm font-medium text-gray-700 mb-2">CSV File</label>
                <input type="file" id="CSV" name="CSV" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Upload</button>
        </form>
    </div>
            
        </div>
    );
};

export default EmployeeSearch;
