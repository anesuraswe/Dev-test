import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import EmployeeSearch from './components/EmployeeSearch';
import EmployeeHistory from './components/EmployeeHistory';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/add-employee" component={EmployeeForm} />
                <Route path="/search-employees" component={EmployeeSearch} />
                <Route path="/employee-history/:id" component={EmployeeHistory} />
                <Route path="/" component={EmployeeSearch} />
            </Routes>
        </Router>
    );
};

export default App;
