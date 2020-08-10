import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Banner.css";
import requests from "../request";

function Banner() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-container">
        <h2 className="movie-title">{movies.name}</h2>
        <div className="button">
          <button>Play</button>
          <button>My List</button>
        </div>
        <h3 className="movie-description">{movies.overview}</h3>
      </div>
      <div className="gradients"></div>
    </header>
  );
}

export default Banner;
