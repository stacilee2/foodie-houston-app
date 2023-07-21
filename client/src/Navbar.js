import React, { useContext } from 'react';
import { UserContext } from './context/user';
import { Link } from 'react-router-dom';

function Navbar() {
    const user = useContext(UserContext)
    let name = user.name
    console.log(name)

  return (
    <div className="nav-bar">
        <Link 
          to="/" 
          className="nav-link"
          activestyle={{ fontWeight: "bold", color: "pink"
          }}>
        Home
        </Link>
        <Link 
          to="/restaurants" 
          className="nav-link"
          activestyle={{ fontWeight: "bold", color: "pink"
          }}>
        Restaurants
        </Link>
        <Link 
          to="/reservations" 
          className="nav-link"
          activestyle={{ fontWeight: "bold", color: "pink"
          }}>
        Reservations
        </Link>
        <Link 
          to="/login" 
          className="nav-link"
          activestyle={{ fontWeight: "bold", color: "pink"
          }}>
        Login
        </Link>
        <Link 
          to="/signup" 
          className="nav-link"
          activestyle={{ fontWeight: "bold", color: "pink"
          }}>
        Signup
        </Link>
      </div>
    )
}

export default Navbar