import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../services/authService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password });
      if (res.status === 200) {
        navigate("/welcome");
        alert(" Login successful!");
      } else if(res.status === 401){
        alert("Invalid credentials");
      }else{
        alert("Something went wrong please try again");
        console.log(res?.status)
      }
    } catch (error) {
      console.log("Error in Login", error);
    }
  };

  return (
    <>
    <Link to={"/"}>Back</Link>
      <h1>This is the login page</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <Link to={"/register"}>Create an account</Link>
    </>
  );
}

export default Login;
