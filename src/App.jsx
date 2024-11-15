import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchIcon from '../search.svg'
import Movie from './Movie'

const API_URL = 'https://api.themoviedb.org/3/search/movie?'
const API_KEY = 'bbf56eadff158f96d897e88bb8564dc0';

const App = () => {

  const [movies, setMovies] = useState([]);
  const [text, setText] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}query=${title}&api_key=${API_KEY}`);
    const data = await response.json();

    console.log(data);
    
    setMovies(data.results)
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input 
          placeholder='Search for movies'
          value={text}
          onChange={(e) => {setText(e.target.value)}}
        />
        <img 
          src={SearchIcon}
          alt='search'
          onClick={() => {searchMovies(text)}}
        />
      </div>
      
      {movies.length > 0 
      ? (
        <div className='container'>
          {movies.map((movie) => (
            <Movie movie={movie}/>
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}


export default App
