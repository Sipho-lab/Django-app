import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './Login';
import Home from './Home';
import './App.css';


function App() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('favourite_pokemon'));

  const checkAuth = () => {
    setIsAuthenticated(!!localStorage.getItem('favourite_pokemon'));
  };

  useEffect(() => {
    
    checkAuth();

    window.addEventListener('storage', checkAuth);

    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Login checkAuth={checkAuth} />} />
        <Route path="/home" element={isAuthenticated ? <Home checkAuth={checkAuth} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;





