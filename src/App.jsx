import React from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeForm from "./components/EmployeeForm";
import EmployeeSearch from "./components/EmployeeSearch";
import EmployeeHistory from "./components/EmployeeHistory";

const App = () => {
  return (
    <>
      <EmployeeForm />
      <EmployeeSearch />
      <EmployeeHistory />
      <EmployeeSearch />
    </>
  );
};

export default App;
