/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import profile from "../Assets/profile.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Components/firebase/setup";
import { signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "boxicons/css/boxicons.min.css";

const Navbar = () => {
  const navigate = useNavigate();

  const [proImg, setProImg] = useState(false);
  const [lang, setLang] = useState(false);
  const [category, setCategory] = useState(false);
  const [search, setSearch] = useState("");
  const [searchSwitch, setSearchSwitch] = useState(false);

  const logout = async () => {
    try {
      await signOut(auth);
      auth.currentUser == null && toast.success("Logged out Successfully");
      setTimeout(() => {
        auth.currentUser == null && navigate("/");
      }, 1000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="bg-black flex items-center p-4 w-screen shadow-md">
        {/* Logo Section */}
        <div className="logo-section" class="flex-1 text-left pl-5">
          <Link to="/">
            <h1 className="text-4xl tracking-[5px] bg-gradient-to-r from-blue-700 via-purple-700 to-yellow-400 bg-clip-text text-transparent">
              OLYMPIA
            </h1>
            <p className="text-sm text-yellow-400 mt-0">
              Gateway to Cinema World
            </p>
          </Link>
        </div>
        {/* Menu Section */}
        <ul
          className="menu-section"
          class="flex-[5] flex justify-center gap-6 list-none m-0 p-0"
        >
          <li>
            <Link
              to="/home"
              className="text-white hover:text-blue-500 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/movies"
              className="text-white hover:text-blue-500 transition"
            >
              Movies
            </Link>
          </li>
          <li>
            <Link
              to="/tv-show"
              className="text-white hover:text-blue-500 transition"
            >
              TV Show
            </Link>
          </li>
          <li>
            <Link
              to="/new-and-pop"
              className="text-white hover:text-blue-500 transition"
            >
              New &amp; Popular
            </Link>
          </li>
        </ul>
        <div
          className="buttons-section"
          class="flex-[3] flex items-center justify-start gap-8"
        >
          {/* Categories Section */}
          <div
            className="relative z-20 ml-8"
            onMouseEnter={() => setCategory(true)}
            onMouseLeave={() => setCategory(false)}
          >
            {/* Icon Trigger */}
            <i className="bx bxs-grid text-2xl text-white cursor-pointer hover:text-blue-500 transition"></i>

            {/* Dropdown */}
            {category && (
              <div className="absolute top-full left-0 mt-2 w-48 rounded-lg bg-gray-800 text-white shadow-lg p-4">
                <ul className="grid grid-cols-1 gap-2 text-sm">
                  <li className=" hover:bg-blue-700 p-2 rounded-md ">
                    <Link to="/category/action">Action</Link>
                  </li>
                  <li className=" hover:bg-blue-700 p-2 rounded-md ">
                    <Link to="/category/comedy">Comedy</Link>
                  </li>
                  <li className=" hover:bg-blue-700 p-2 rounded-md ">
                    <Link to="/category/thriller">Thriller</Link>
                  </li>
                  <li className=" hover:bg-blue-700 p-2 rounded-md ">
                    <Link to="/category/horror">Horror</Link>
                  </li>
                  <li className=" hover:bg-blue-700 p-2 rounded-md ">
                    <Link to="/category/romance">Romance</Link>
                  </li>
                  <li className=" hover:bg-blue-700 p-2 rounded-md ">
                    <Link to="/category/documentary">Documentary</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="relative ml-5">
            {/* Search Icon */}
            <div
              className="cursor-pointer w-10 h-10 flex items-center justify-center text-whitebg-blue-700 rounded-full hover:bg-blue-500 transition ease-in-out duration-200"
              onClick={() => setSearchSwitch(!searchSwitch)}
            >
              <i class="bx bx-search text-white text-lg"></i>
            </div>

            {/* Search Input Section */}
            {searchSwitch && (
              <div className="absolute top-12 right-0 bg-gray-900 p-3 rounded-lg shadow-lg w-96 transition ease-in-out duration-200">
                <div className="flex items-center bg-gray-800 rounded-md p-2">
                  <input
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search for a movie..."
                    className="outline-none bg-transparent text-white text-sm w-full"
                  />
                  <box-icon
                    name="search"
                    className="text-white cursor-pointer text-sm"
                  ></box-icon>
                </div>
              </div>
            )}
          </div>

          {/* Language Section */}
          <div
            className="relative z-10 ml-5"
            onMouseEnter={() => setLang(true)}
            onMouseLeave={() => setLang(false)}
          >
            <h1 className="cursor-pointer text-gray-300 text-lg font-semibold">
              EN
            </h1>
            {lang && (
              <div className="absolute rounded-lg bg-gray-800 text-white shadow-lg p-4 w-48">
                <ul className="space-y-2">
                  <li className="hover:bg-blue-700 p-2 rounded-md">English</li>
                  <li className="hover:bg-blue-700 p-2 rounded-md">French</li>
                  <li className="hover:bg-blue-700 p-2 rounded-md">Italian</li>
                  <li className="hover:bg-blue-700 p-2 rounded-md">Spanish</li>
                </ul>
              </div>
            )}
          </div>

          {/* Profile Section */}
          <div
            onMouseEnter={() => setProImg(true)}
            onMouseLeave={() => setProImg(false)}
            className="relative z-10 ml-auto"
          >
            {/* Profile Icon */}
            <img
              src={profile}
              className="w-9 h-9 rounded-full cursor-pointer border-2 border-blue-500 hover:border-blue-700 transition"
            />

            {/* Profile Dropdown */}
            {proImg && (
              <div className="absolute right-0 top-12 w-48 bg-gray-800 text-white shadow-lg rounded-lg p-3 transition ease-in-out duration-200 z-20">
                <ul className="space-y-2 text-sm">
                  {auth.currentUser?.emailVerified ? (
                    <>
                      <li
                        onClick={logout}
                        className="hover:bg-blue-700 px-2 py-1 rounded-md cursor-pointer"
                      >
                        Logout
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="hover:bg-blue-700 px-2 py-1 rounded-md cursor-pointer">
                        <Link to="/login">Sign In</Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
