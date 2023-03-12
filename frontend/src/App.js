import React from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './authPages/Login';
import Register from './authPages/Register';
import Dashboard from './authPages/Dashboard';

function App() {
  return (
    <div>
     <Router>
          <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
