import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../Components/firebase/setup";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "boxicons/css/boxicons.min.css";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailLogin = async () => {
    try {
      const data = await signInWithEmailAndPassword(auth, email, password);
      if (!data.user.emailVerified) {
        toast.error("Email not verified. Please check your inbox.");
      } else {
        toast.success("Logged in successfully!");
        navigate("/home");
      }
    } catch (err) {
      console.error(err);
      toast.error("Invalid email or password. Please try again.");
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      toast.success(`Welcome, ${result.user.displayName}!`);
      navigate("/home");
    } catch (err) {
      console.error(err);
      toast.error("Google sign-in failed. Please try again.");
    }
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div
        className="flex flex-col justify-center items-center min-h-screen"
        style={{
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/public/cine1.jpeg') no-repeat center/cover`,
        }}
      >
        <h1 className="text-4xl tracking-[5px] bg-gradient-to-r from-blue-700 via-purple-700 to-yellow-400 bg-clip-text text-transparent mb-8">
          OLYMPIA
        </h1>
        <div className="bg-white bg-opacity-30 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Sign In</h1>
          <label className="font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 border border-gray-300 text-gray-900 text-sm rounded-md block w-full h-10 p-2.5 focus:ring-2 focus:ring-blue-500"
            required
            placeholder="Your email address"
          />
          <label className="font-medium text-gray-700 mt-4">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 border border-gray-300 text-gray-900 text-sm rounded-md block w-full h-10 p-2.5 focus:ring-2 focus:ring-blue-500"
            required
            placeholder="Password"
          />
          <button
            onClick={emailLogin}
            className="bg-yellow-400 h-10 hover:bg-yellow-500 w-full text-black font-semibold rounded-lg mt-6 transition-transform transform hover:scale-105"
          >
            Sign In
          </button>
          <button
            onClick={handleGoogleSignIn}
            className="bg-blue-500 h-10 hover:bg-blue-600 w-full text-white font-semibold rounded-lg mt-4 flex items-center justify-center transition-transform transform hover:scale-105"
          >
            <i className="bx bxl-google text-2xl text-white cursor-pointer transition mr-2"></i>
            Sign in with Google
          </button>
          <p className="text-sm mt-6 text-center text-gray-600">
            By continuing, you agree to the Olympia Conditions of Use and
            Privacy Notice.
          </p>
          <hr className="my-4" />
          <p className="text-sm text-center text-gray-800">
            New to Olympia?{" "}
            <Link to="/signup">
              <span className="text-blue-700 hover:underline">
                Create an account
              </span>
            </Link>
          </p>
        </div>
        <footer className="mt-8 text-center text-gray-400 text-sm">
          <p>
            <Link
              to="/privacy-policy"
              className="text-gray-400 no-underline text-base font-bold hover:text-blue-600"
            >
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link
              to="/feedback"
              className="text-gray-400 no-underline text-base font-bold hover:text-blue-600"
            >
              Send Us Feedback
            </Link>{" "}
            | Help
          </p>
          <p>&copy; {new Date().getFullYear()} Olympia.com</p>
        </footer>
      </div>
    </>
  );
};

export default Signin;
