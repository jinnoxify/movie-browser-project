import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./MovieRow.css";

function MovieRow({ title, movieUrl }) {
  const movieURLOne = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(movieUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [movieUrl]);
  return (
    <div className="container">
      <h2>{title}</h2>
      <div className="images">
        {movies.map((movie) => (
          <img
            className="image-alone"
            src={`${movieURLOne}${movie.poster_path}`}
            alt={movie.name}
          ></img>
        ))}
      </div>
    </div>
  );
}

export default MovieRow;
