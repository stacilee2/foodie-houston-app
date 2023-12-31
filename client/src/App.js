import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Login from "./Login";
import SignUp from './Signup';
import Home from './Home';
import Restaurants from './Restaurants';
import Reservations from './Reservations';
import Profile from './Profile';
import { UserProvider } from "./context/user";
import EditResForm from './EditResForm';
import CreateRestaurant from './CreateRestaurant';

function App() {

  return (
    <div className="App">
      <h1 className="foodie-header">Foodie.</h1>
      <div className="houston-banner"></div>
      <UserProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element = {<SignUp /> } />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/restaurants/new" element={<CreateRestaurant />} />
          <Route path="/reservations/:reservation/:reservationId/reservation/edit" element={<EditResForm />} />
        </Routes>
      </UserProvider>
    </div>
  );
};

export default App;
