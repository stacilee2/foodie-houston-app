import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Login from "./Login";
import Home from './Home';
import Restaurants from './Restaurants';
import { UserProvider } from "./context/user";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Navbar />
        <Login />
        <Home />
        <Restaurants />
      </UserProvider>
    </div>
  );
}

export default App;
