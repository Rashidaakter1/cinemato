import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="text-red-600 flex items-center justify-between p-3">
      <Link to="/" className="lg:text-6xl text-4xl cursor-pointer">
        CineMato
      </Link>
      <div className="lg:px-6 px-2">
        <Link to='/signin' className=" m-2 text-white rounded-xl bg-red-600 py-2 lg:px-6 px-2 ">
          sign in
        </Link>
        <Link to='/signup' className=" m-2 text-white rounded-xl bg-red-600 py-2 lg:px-6 px-2 ">
          {" "}
          sign up
        </Link>
      </div>
    </div>
  );
};
