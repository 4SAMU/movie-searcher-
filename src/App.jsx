import React, { useState, useEffect } from "react";
import LoadingBar from 'react-top-loading-bar';

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "https://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [progress, setProgress]=useState(0);

  const progressBar=()=>{
    setProgress(progress+100)
    if(progress===100)
    setProgress(0);
  }

 
  useEffect(() => {
    searchMovies("");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">

  <div>
    <LoadingBar
    color='#f11946'
    progress={progress}
    onLoaderFinished={() => setProgress(0)}
  />
    
    </div>
      <h1>SAMUTECH studio</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
          onKeyPress={(e) => e.key === 'Enter'&&progressBar()&& searchMovies(searchTerm)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => progressBar()&&searchMovies(searchTerm)}      

        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2><span>please enter a valid movie name</span>
        </div>
      )}
    </div>
  );
};

export default App;
