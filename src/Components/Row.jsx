import React, { useState, useEffect } from "react";
import axios from "../axios";
import "../Row.css";
import Youtube from "react-youtube";
const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on specific condition/variable
  useEffect(() => {
    // if [] are empty then it means only run once when row loades and then don't run again
    //  if [movies] then it means run once when row loades and then run every single time movies are updating

    //asyn function inside useeffect
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
    // now we need to call fetchUrl which is a prop inside the rerender block of useeffect as it is a dependency now
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      //link here,
      autoplay: 1,
    },
  };

  console.log(movies);

  return (
    <div className="row">
      {/* TITLE */}
      <h1>{title}</h1>
      <div className="row_posters">
        {/*row posters*/}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`${isLargeRow ? "row_posterLarge" : "row_poster"}`}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />} */}
      {/* Container -> posters */}
    </div>
  );
};

export default Row;
