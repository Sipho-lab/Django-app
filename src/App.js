import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './Login';
import Home from './Home';
import './App.css';


function App() {
  // Use a state variable to track authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('favourite_pokemon'));

  // Update authentication state on login/logout
  const checkAuth = () => {
    setIsAuthenticated(!!localStorage.getItem('favourite_pokemon'));
  };

  useEffect(() => {
    // Check authentication when the app is mounted
    checkAuth();

    // Optionally, listen to storage events (e.g., if you're syncing multiple tabs)
    window.addEventListener('storage', checkAuth);

    // Cleanup event listener when component unmounts
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



// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './Login';
// import Home from './Home';

// function App() {
//   const isAuthenticated = !!localStorage.getItem('favourite_pokemon');

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Login />} />
//         <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

