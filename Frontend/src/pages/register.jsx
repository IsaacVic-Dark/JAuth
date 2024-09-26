import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"
import {register} from '../services/authService'


function Register() {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const navigate = useNavigate()
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
        await register({ name, email, password})
        navigate("/welcome")
        alert('Register successful!')
    } catch (error) {
        console.log('Error in registration', error)
    } 
  };

  return (
    <>
    <Link to={"/"}>Back</Link>
      <h1>This is the register page</h1>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Enter Your Name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="email" placeholder="Enter Your email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="Enter Your password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
      <Link to={"/login"}>Have an account?</Link>
    </>
  );
}

export default Register;
