import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
//API key = 725a68de

const API_URL = "http://www.omdbapi.com?apikey=725a68de"

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        
    }, []);

    return (
        <div className='app'>
            <h1>MoviePedia</h1>

            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                    src = {SearchIcon}
                    alt = "Search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length > 0 
                     ? (
                        <div className='container'>
                            {movies.map((movie) => (
                                <MovieCard movie = {movie}/>
                            ))}
                        </div>
                     ) : (
                        <div className='empty'>
                            <h2>Search for movies!</h2>
                        </div>
                     )
            }
            
        </div>
    );
}

export default App