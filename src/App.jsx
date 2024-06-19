import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import EmployeeSearch from './components/EmployeeSearch';
import EmployeeHistory from './components/EmployeeHistory';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/add-employee" element={<EmployeeForm/>} />
                <Route path="/search-employees" element={<EmployeeSearch/>} />
                <Route path="/employee-history/:id" element={<EmployeeHistory/>} />
                <Route path="/" element={<EmployeeSearch/>} />
            </Routes>
        </Router>
    );
};

export default App;
