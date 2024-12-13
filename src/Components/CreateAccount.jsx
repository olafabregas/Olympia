import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../Components/firebase/setup";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      onAuthStateChanged(auth, async (user) => {
        await sendEmailVerification(user);
      });
    } catch (err) {
      console.error(err);
      toast.error(err.message);
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
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            Create Account
          </h1>
          <label className="font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            className="mt-2 border border-gray-300 text-gray-900 text-sm rounded-md block w-full h-10 p-2.5 focus:ring-2 focus:ring-blue-500"
            required
            placeholder="First and last name"
          />
          <label className="font-medium text-gray-700 mt-4">Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 border border-gray-300 text-gray-900 text-sm rounded-md block w-full h-10 p-2.5 focus:ring-2 focus:ring-blue-500"
            required
            placeholder="Your email address"
          />

          <label className="font-medium text-gray-900 mt-4">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="mt-2 border border-gray-300 text-gray-900 text-sm rounded-md block w-full h-10 p-2.5 focus:ring-2 focus:ring-blue-500"
            required
            placeholder="Password"
          />
          <p className="text-sm mt-6 text-gray-900">
            To verify your email, we will send you a link.
          </p>
          <button
            onClick={emailSignup}
            className="bg-yellow-400 h-10 hover:bg-yellow-500 w-full text-black font-semibold rounded-lg mt-6 transition-transform transform hover:scale-105"
          >
            Create your Olympia account
          </button>
          <p className="text-sm mt-6 text-center text-gray-900">
            By continuing, you agree to the Olympia Conditions of Use and
            Privacy Notice.
          </p>
          <hr className="my-4" />
          <p className="text-sm text-center text-gray-800">
            Already have an account?{" "}
            <Link to="/login">
              <span className="text-cyan-300 hover:underline">Sign in</span>
            </Link>
          </p>
        </div>
        <footer className="mt-8 text-center text-gray-400 text-sm">
          <p>Terms and Privacy Notice | Send us feedback | Help</p>
          <p>&copy; {new Date().getFullYear()} Olympia.com</p>
        </footer>
      </div>
    </>
  );
};

export default CreateAccount;
