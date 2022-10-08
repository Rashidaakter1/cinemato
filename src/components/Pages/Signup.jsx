import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   await signUp(email, password);
    //   navigate("/");
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <div>
      <div className=" relative">
        <img
          className="object-cover h-screen lg:block hidden"
          src="http://demo.amytheme.com/movie/demo/elementor-movie-news/wp-content/uploads/sites/8/2022/05/img_22.jpg"
          alt=""
        />
      </div>
      <div className="">
        {" "}
        <div className="absolute lg:top-28 top-20 lg:left-1/3  mx-auto lg:w-2/6 w-full h-[500px] lg:bg-black/75 bg-lime-100 text-white  z-50 mb-40  ">
          {" "}
          <div className=" mx-auto px-3 py-16 ">
            <h1 className="text-3xl lg:text-white text-black font-bold">
              Sign Up
            </h1>{" "}
            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
              {" "}
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded"
                type="email"
                placeholder="Email"
                autoComplete="email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
              <button className="bg-red-600 py-3 my-6 rounded font-bold">
                Sign Up
              </button>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-8">
                <span className="text-gray-600">
                  Already subscribed to CineMato?
                </span>{" "}
                <Link className="lg:text-white text-black" to="/signin">
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
