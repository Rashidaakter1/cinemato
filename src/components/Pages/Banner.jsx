import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "./Card";

export const Banner = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  
  console.log(movies);
  useEffect(() => {
    axios
      .get("https://movie-task.vercel.app/api/popular?page=1")
      .then(function (response) {
        // handle success
        setMovies(response.data.data.results);
      })
      .catch(function (error) {
        // handle error
        setError(error, "find the error");
      })
      .then(function () {
        // always executed
      });
  }, []);
  return (
    <div className="text-center">
      <input
        onChange={(e) => setQuery(e.target.value)}
        className="w-1/2 p-2 text-center"
        type="text"
        placeholder="search your movie .."
      />
      <div className="text-white grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-5">
        {movies
          .filter((movie) => movie.original_title.toLowerCase().includes(query))
          .map((movie) => (
            <Card key={movie.id} movie={movie} ></Card>
          ))}
      </div>
      {/* <img src="https://cinerama.qodeinteractive.com/wp-content/uploads/2018/05/landing-slider-img.png" alt="banner" />
      <img src="http://demo.amytheme.com/movie/demo/elementor-movie-news/wp-content/uploads/sites/8/2022/05/img_25.jpg" alt="banner" />
      <img src="http://demo.amytheme.com/movie/demo/elementor-movie-news/wp-content/uploads/sites/8/2022/05/img_24.jpg" alt="banner" />
      <img src="http://demo.amytheme.com/movie/demo/elementor-movie-news/wp-content/uploads/sites/8/2022/05/img_22.jpg" alt="banner" /> */}
    </div>
  );
};
