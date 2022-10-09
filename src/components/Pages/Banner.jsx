import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { Loading } from "./Loading";

export const Banner = () => {
  // const [movies, setMovies] = useState([]);
  // const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [queryYear, setQueryYear] = useState(0);

  const [movies, setMovies] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  console.log(movies, queryYear);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://movie-task.vercel.app/api/popular?page=2")
        .then((res) => {
          if (!res.ok) {
            // error coming back from server
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setMovies(data?.data?.results);
          console.log(data);
          setError(null);
        })
        .catch((err) => {
          // auto catches network / connection error
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  // useEffect(() => {
  // axios
  //   .get("https://movie-task.vercel.app/api/popular?page=2")
  //   .then(function (response) {
  //     // handle success
  //     setMovies(response.data.data.results);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error, "find the error");
  //   })
  //   .then(function () {
  //     // always executed
  //   });
  //   fetch('')
  //   .then(res=>res.json()).then(response=>setMovies(response.data.data.results))
  // }, []);
  return (
    <div className="text-center">
      <input
        onChange={(e) => setQuery(e.target.value)}
        className="w-1/2 p-2 text-center"
        type="text"
        placeholder="search your movie .."
      />

      <div className="p-5 mt-5">
        <label
          className="text-white w-1/4  border-2   border-red-600 rounded-xl pl-2 py-2"
          htmlFor=""
        >
          search your movie by year
          <select
            onChange={(e) => setQueryYear(e.target.value)}
            className="w-1/7 py-1 pl-3  ml-3  rounded-xl text-center text-black"
            name="year"
          >
            {/* {movies.map((movie) => (
            
              <option>{movie.release_date.slice(0, 4)} </option>
            ))} */}

            {movies.map((movie) => (
              <option>{movie.release_date.slice(0, 4)} </option>
            ))}
          </select>
        </label>
      </div>

      <div className="">
        <h2 className="text-white text-left lg:mx-12 mx-4 lg:font-bold font-medium lg:text-4xl text-2xl capitalize  border-red-600 border-l-8 p-2">
          popular Movies{" "}
        </h2>
        <div>
          {" "}
          {error && <div className="text-white">{error}</div>}
          {isPending && (
            <div>
              <Loading />
            </div>
          )}
        </div>
        <div className="text-white bg-black grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-5">
          {movies
            .filter(
              (movie) =>
                movie.release_date.slice(0, 4).includes(queryYear) &&
                movie.original_title.toLowerCase().includes(query)
            )
            .map((movie) => (
              <Card key={movie.id} movie={movie}></Card>
            ))}
        </div>
      </div>
      {/* <img src="https://cinerama.qodeinteractive.com/wp-content/uploads/2018/05/landing-slider-img.png" alt="banner" />
      <img src="http://demo.amytheme.com/movie/demo/elementor-movie-news/wp-content/uploads/sites/8/2022/05/img_25.jpg" alt="banner" />
      <img src="http://demo.amytheme.com/movie/demo/elementor-movie-news/wp-content/uploads/sites/8/2022/05/img_24.jpg" alt="banner" />
      <img src="http://demo.amytheme.com/movie/demo/elementor-movie-news/wp-content/uploads/sites/8/2022/05/img_22.jpg" alt="banner" /> */}
    </div>
  );
};
