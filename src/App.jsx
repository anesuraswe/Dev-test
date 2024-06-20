import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainScreen from "./components/MainScreen";
import AuthLogin from "./components/AuthLogin";

const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route index element={<AuthLogin />}/>
        <Route path="/table" element={<MainScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
