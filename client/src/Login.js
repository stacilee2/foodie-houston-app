import { useState, useContext } from "react";
import { UserContext } from "./context/user";
import Signup from "./Signup";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([])
  const { onLogin } = useContext(UserContext)

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
          } else {
            const errors = Object.entries(user.error)
            errors.map(messages => {
              setErrors(messages.join(", "))

              //   .map(err => {
              //   return err.join(",")
              // }))
            })
            setTimeout(() => {
              setErrors("")
            }, 5000);
            setUsername("")
            setPassword("")
            
          }
      })
    }
  

  return (
    <div>
      <h4>Please Login or Sign-up Here.</h4>
      <form onSubmit={handleSubmit} className="login-signup-form">
        <p>LOGIN</p>
        <hr />
        <div className="error-card">{errors}</div>
        <label>Username: </label>
        <input
          type="text"
          id="login-username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br/>
        <br/>
         <label>Password: </label>
        <input
          type="text"
          id="login-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <br/>
        <button type="submit">Login</button>
      </form> 
      <Signup />
      
    </div>
  );
}

export default Login;
