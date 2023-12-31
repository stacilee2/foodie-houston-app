import { useState, useContext } from "react";
import { UserContext } from "./context/user";
import Signup from "./Signup";
import { useNavigate } from "react-router-dom";
import {AiFillEye} from "react-icons/ai";
import {AiOutlineEyeInvisible} from "react-icons/ai";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [errorsList, setErrorsList] = useState("");
  const { onLogin } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        username: username,
        password: password }),
      })
      .then(r => r.json())
      .then(user => {
          if(!user.error) {
            onLogin(user)
            setUsername("")
            setPassword("")
            navigate("/restaurants")
          } else {
            setErrorsList(user.error)
            setTimeout(() => {
              setErrorsList("")
            }, 5000);
          }
      })
    };

    function togglePassword() {
      hidePassword ? setHidePassword(false) : setHidePassword(true)
    };
  
  return (
    <div>
      <h4>Please Login or Sign-up Here.</h4>
      <form onSubmit={handleSubmit} className="login-signup-form">
        <p>LOGIN</p>
        <ul className="error-card">{errorsList}</ul>
        <hr />
        <label>Username: </label>
        <div className="username-container">
          <input
            type="text"
            id="login-username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <label>Password: </label>
        <div className="password-container">
          <input
            type={ hidePassword ? "password" : "text" }
            id="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
          <div className="toggle-eye" onClick={togglePassword}>
          { hidePassword ? <AiFillEye/> : <AiOutlineEyeInvisible/>}
          </div>
        </div>
        <br />
        <button type="submit">Login</button>
      </form> 
      <Signup togglePassword={togglePassword} />
    </div>
  )
};

export default Login;
