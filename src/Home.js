import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home({checkAuth}) {
  const navigate = useNavigate();
  const favouritePokemon = localStorage.getItem('favourite_pokemon');

  const handleLogout = async () => {
    await axios.post('http://localhost:8000/api/logout/');
    localStorage.removeItem('favourite_pokemon');
    checkAuth(); 
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Home Page</h2>
      <p>Your favourite Pokémon is: {favouritePokemon}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
