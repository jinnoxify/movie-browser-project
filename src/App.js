import React from "react";
import "./App.css";
import MovieRow from "./components/MovieRow";
import requests from "./request";

function App() {
  return (
    <div className="App">
      <MovieRow
        title="Netflix Originals"
        movieUrl={requests.fetchNetflixOriginals}
      />
      <MovieRow title="Trending" movieUrl={requests.fetchTrending} />
      <MovieRow title="Top Rated" movieUrl={requests.fetchTopRated} />
      <MovieRow title="Action Movies" movieUrl={requests.fetchActionMovies} />
      <MovieRow title="Comedy Movies" movieUrl={requests.fetchComedyMovies} />
    </div>
  );
}

export default App;
