import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Login from "./Login";
import SignUp from './Signup';
import Home from './Home';
import Restaurants from './Restaurants';
import Reservations from './Reservations';
import { UserProvider } from "./context/user";

function App() {
  return (
    <div className="App">
      <h2>Foodie Houston</h2>
      <UserProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element = {<SignUp /> } />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
