import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"
import {register} from '../services/authService'


function Register() {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    setLoading(true)
    e.preventDefault()
    try {
        await register({ name, email, password})
        navigate("/welcome")
        alert('Register successful!')
    } catch (error) {
        console.log('Error in registration', error)
    } 
  };

  const isRegisterDisabled = name.length < 5 || email === '' || password.length < 1 || loading;

  return (
    <>
    <Link to={"/"}>Back</Link>
      <h1>This is the register page</h1>
      <form>
        <input type="text" placeholder="Enter Your Name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="email" placeholder="Enter Your email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="Enter Your password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button  onClick={handleRegister} disabled={isRegisterDisabled}>
          {loading ? 'Signing Up ...' : 'Register'}
        </button>
      </form>
      <Link to={"/login"}>Have an account?</Link>
    </>
  );
}

export default Register;
