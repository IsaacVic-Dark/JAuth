import "./App.css";
import { Link } from 'react-router-dom'

function App() {
  
  return (
    <>
      <h1>Welcome Isaac</h1>
      <Link to="/login">Login</Link>
      <Link to="/register">register</Link>
    </>
  );
}

export default App;
