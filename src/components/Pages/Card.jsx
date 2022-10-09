import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

export const Card = ({ movie }) => {
  return (
    <div className="bg-black p-3">
      <div className="card ">
        <figure className="px-10 pt-10">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt="movies"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{movie.original_title}</h2>

          <label
            htmlFor="my-modal-6"
            className=" bg-red-600 cursor-pointer  rounded-xl px-6 py-2 text-white "
          >
            Watch
          </label>
          <Link className="btn btn-primary" to={`/singleMovie/${movie.id}`}>
            More Details
          </Link>
        </div>
      </div>
      <div className="text-black">
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <figure className="p-1">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt="movies"
                className="rounded-xl"
              />
            </figure>
            <h3 className="font-bold text-lg">{movie.title}</h3>
            <p className="py-4 text-justify">{movie.overview}</p>
            <div className="modal-action">
              <label htmlFor="my-modal-6" className="btn btn-ghost">
                Back to{" "}
                <span className="text-xl -mt-3 p-2">
                  <AiFillHome />
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
