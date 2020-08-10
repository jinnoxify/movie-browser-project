import React from "react";
import "./App.css";
import MovieRow from "./components/MovieRow";
import requests from "./request";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <MovieRow
        title="Netflix Originals"
        movieUrl={requests.fetchNetflixOriginals}
        isLarge
      />
      <MovieRow title="Trending" movieUrl={requests.fetchTrending} />
      <MovieRow title="Top Rated" movieUrl={requests.fetchTopRated} />
      <MovieRow title="Action Movies" movieUrl={requests.fetchActionMovies} />
      <MovieRow title="Comedy Movies" movieUrl={requests.fetchComedyMovies} />
      <MovieRow title="Horror Movies" movieUrl={requests.fetchHorrorMovies} />
    </div>
  );
}

export default App;
