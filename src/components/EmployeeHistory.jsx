import React, { useState, useEffect } from 'react';
import { getEmployees } from '../services/apiService';

const EmployeeHistory = ({ employeeId }) => {
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        getEmployees().then(response => {
            const emp = response.data.find(e => e.id === employeeId);
            setEmployee(emp);
        });
    }, [employeeId]);

    if (!employee) return <div>Loading...</div>;

    return (
        <div>
            <h2>{employee.name}&apos;s History</h2>
            <ul>
                {employee.roles.map((role, index) => (
                    <li key={index}>
                        {role.role} from {role.date_started} to {role.date_left}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeHistory;
