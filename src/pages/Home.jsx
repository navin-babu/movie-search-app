import React, { useState } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    { id: 1, title: "John Wick", release_date: "2014" },
    { id: 2, title: "Matrix", release_date: "2017" },
    { id: 3, title: "Terminator", release_date: "2019" },
    { id: 4, title: "Interstellar", release_date: "2022" },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e)=> setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) => ( 
            <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
