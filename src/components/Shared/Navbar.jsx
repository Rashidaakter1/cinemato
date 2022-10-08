import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
export const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="text-red-600 flex items-center justify-between p-3">
      <Link to="/" className="lg:text-6xl text-4xl cursor-pointer">
        CineMato
      </Link>
      <div className="lg:px-6 px-2">
        {user ? (
          <Link onClick={()=>signOut(auth)} className=" m-2 text-white rounded-xl bg-red-600 py-2 lg:px-6 px-2 ">
            {" "}
            Sign Out
          </Link>
        ) : (
          <Link
            to="/signin"
            className=" m-2 text-white rounded-xl bg-red-600 py-2 lg:px-6 px-2 "
          >
            sign in
          </Link>
        )}
      </div>
    </div>
  );
};
