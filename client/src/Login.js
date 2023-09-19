import { useState, useContext } from "react";
import { UserContext } from "./context/user";
import Signup from "./Signup";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);
  const [errorsList, setErrorsList] = useState("");
  const { onLogin } = useContext(UserContext);

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
            setErrorsList(user.error)
            setTimeout(() => {
              setErrorsList("")
            }, 5000);
          }
      })
    };
  
    // const handleClickShowPassword = () => {
    //   setValues({ ...values, showPassword: !values.showPassword });
    // };

    // const handleMouseDownPassword = (event) => {
    //   event.preventDefault();
    // };

    // const handlePasswordChange = (prop) => (event) => {
    //   setValues({ ...values, [prop]: event.target.value });
    // };

  return (
    <div>
      <h4>Please Login or Sign-up Here.</h4>
      <form onSubmit={handleSubmit} className="login-signup-form">
        <p>LOGIN</p>
        <ul className="error-card">{errorsList}</ul>
        <hr />
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
  )
};

export default Login;
