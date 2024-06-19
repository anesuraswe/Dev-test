import React, { useState, useEffect } from 'react';
import { getEmployees } from '../services/apiService';

const EmployeeSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getEmployees().then(response => setEmployees(response.data));
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredEmployees = employees.filter(employee =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>Search page</h1>
            <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search by name" />
            <ul>
                {filteredEmployees.map(employee => (
                    <li key={employee.id}>{employee.name} - {employee.role}</li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeSearch;
