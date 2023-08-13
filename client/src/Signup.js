import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './context/user';

function Signup() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errorsList, setErrorsList] = useState([])
    const { signup } = useContext(UserContext)
    const navigate = useNavigate();
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          username: username,
          password: password,
          password_confirmation: passwordConfirmation,
        }),
      })
        .then((r) => r.json())
        .then(user => {
          if (user.error) {
              setErrorsList(user.error)
              setTimeout(() => {
                setErrorsList([])
            }, 5000);
          } else {
          navigate("/restaurants")
            signup(user)
            setName("")
            setUsername("")
            setPassword("")
            setPasswordConfirmation("")
          }
        })
    }
    
    return (
    <div>
        <h4>Sign-up for your free account today:</h4>
      <form onSubmit={handleSubmit} className="login-signup-form"> 
      SIGN-UP 
      <br/>
      <ul className="error-card">{errorsList.map((error, index) => 
        <li key={index}>{error}</li>
      )}</ul>
      <hr />
      <label>Name: </label>
        <input
          type="text"
          id="signup-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br/>
        <label>Username: </label>
        <input
          type="text"
          id="signup-username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br/>
        <label>Password: </label>
        <input
          type="password"
          id="signup-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         <br />
         <br/>
        <label>Confirm Password: </label>
        <input
          type="password"
          id="signup-password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
         <br/>
         <br/>
        <button type="submit">Submit</button>
      </form>
      </div>
    );
}

export default Signup