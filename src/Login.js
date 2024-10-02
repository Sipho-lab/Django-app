import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login({checkAuth}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/login/', { username, password });
      localStorage.setItem('favourite_pokemon', response.data.favourite_pokemon);
      checkAuth();
      navigate('/home');
    } catch (error) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="container">
    <h2>Login</h2>
    {error && <p className="error">{error}</p>}
    <form>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={handleLogin}>Login</button>
    </form>
  </div>
  );
}

export default Login;
