import React, { useContext } from 'react';
import { UserContext } from './context/user';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {

  const {user, onLogout, loggedIn} = useContext(UserContext)
  const navigate = useNavigate()

  const logoutUser = () => {
    fetch('/logout', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'}
    })
    .then(()=> {
      onLogout()
      navigate('/')
    })
  }

    if (!loggedIn || user.errors) {
      return(
        <div>
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
              to="/login" 
              className="nav-link"
              activestyle={{ fontWeight: "bold", color: "pink"
              }}>
            Login/Signup
            </Link>
        </div>
        </div>
      )
    } else {
      return (
        <div>
           <div className="nav-bar">
           <p className="greeting">Welcome, {user.name} <button onClick={logoutUser}>Logout</button></p>
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
                  to="/profile" 
                  className="nav-link"
                  activestyle={{ fontWeight: "bold", color: "pink"
                  }}>
                Profile
                </Link>
            </div>
        </div>
      )
    }
   
}

export default Navbar