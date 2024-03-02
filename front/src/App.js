import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Vehicle from './pages/vehicle/Vehicle';
import List from './pages/list/List';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';
// import { AuthProvider } from './context/AuthContext';
import { AuthContextProvider, AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthContextProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<List />} />
        <Route path="/vehicles/:id" element={<Vehicle />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:id" element={<Profile />} />

      </Routes>
    </Router>
    </AuthContextProvider>
  );
}

export default App;
