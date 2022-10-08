import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  console.log(movie);
  useEffect(() => {
    axios
      .get(`https://movie-task.vercel.app/api/movie?movieId=${id}`)
      .then(function (response) {
        // handle success
        setMovie(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error, "find the error");
      })
      .then(function () {
        // always executed
      });
  }, []);
  return (
    <div className="p-5 lg:h-screen h-max">
      <div className="p-5 grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-4 ">
        <figure className="">
          <img
            className=" w-full"
            src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
            alt="Album"
          />
        </figure>
        <div className=" text-white p-5 mt-auto">
          <h2 className="lg:text-3xl font-semibold   text-xl">
            <span className="text-red-600">Movie Name </span> :{" "}
            {movie?.original_title}
          </h2>
          <div className="text-lg  mt-5 mb-5">
            <p className="text-justify">{movie?.overview}</p>
            <p>
              <span className="text-red-600">Popularity</span> :{" "}
              {movie?.popularity}
            </p>
            <p>
              <span className="text-red-600">Original Language</span> :{" "}
              {movie?.original_language}
            </p>
            <p>
              <span className="text-red-600">Release date </span>:{" "}
              {movie?.release_date}
            </p>
            <p>
              <span className="text-red-600">Status</span> : {movie?.status}
            </p>
            <p>
              <span className="text-red-600">Vote average </span>:{" "}
              {movie?.vote_average}
            </p>
          </div>
          <button className="btn btn-primary">Watch Now</button>
        </div>
      </div>
    </div>
  );
};
