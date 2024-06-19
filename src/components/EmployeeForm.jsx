import React, { useState } from 'react';
import { createEmployee, updateEmployee } from '../services/apiService';

const EmployeeForm = ({ employee, onSave }) => {
    const [formData, setFormData] = useState(employee || {
        name: '',
        employee_id: '',
        department: '',
        role: '',
        date_started: '',
        date_left: '',
        duties: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (employee) {
            updateEmployee(employee.id, formData).then(onSave);
        } else {
            createEmployee(formData).then(onSave);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
            <input type="text" name="employee_id" value={formData.employee_id} onChange={handleChange} placeholder="Employee ID" />
            <input type="text" name="department" value={formData.department} onChange={handleChange} placeholder="Department" />
            <input type="text" name="role" value={formData.role} onChange={handleChange} placeholder="Role" />
            <input type="date" name="date_started" value={formData.date_started} onChange={handleChange} />
            <input type="date" name="date_left" value={formData.date_left} onChange={handleChange} />
            <textarea name="duties" value={formData.duties} onChange={handleChange} placeholder="Duties"></textarea>
            <button type="submit">Save</button>
        </form>
    );
};

export default EmployeeForm;
