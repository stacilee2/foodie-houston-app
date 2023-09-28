import React, { useContext } from 'react';
import { UserContext } from './context/user';
import { Link } from 'react-router-dom';

function Navbar() {

  const {user, handleLogout, loggedIn} = useContext(UserContext)

    if (!loggedIn) {
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
              to="/restaurants/new" 
              className="nav-link"
              activestyle={{ fontWeight: "bold", color: "pink"
              }}>
            Create Restaurant
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
           <p className="greeting">Welcome, {user.name}  
           <button onClick={handleLogout}>Logout</button></p>
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
                  to="/restaurants/new" 
                  className="nav-link"
                  activestyle={{ fontWeight: "bold", color: "pink"
                  }}>
                  Create Restaurant
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
};

export default Navbar;