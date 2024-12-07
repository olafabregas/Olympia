import React from "react";
import Signin from "./Components/Signin";
import CreateAccount from "./Components/CreateAccount";
import { Routes, Route } from "react-router-dom";
import Main from "./Components/Main";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Trailer from "./Components/Trailer";
import Movies from "./Components/Movies";
import TVShow from "./Components/TVShow";
import NewAndPop from "./Components/NewandPop";
import PrivacyPolicyPage from "./Components/Privacy";
import SignUp from "./Components/SignUp";
import TFeedback from "./Components/Tfeedback";
import TSignup from "./Components/TSignup";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import FAQPage from "./Components/FAQ";
import Feedback from "./Components/Feedback";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/details" element={<Details />} />
        <Route path="/trailer" element={<Trailer />} />
        <Route path="/tv-show" element={<TVShow />} />
        <Route path="/new-and-pop" element={<NewAndPop />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/t-signup" element={<TSignup />} />
        <Route path="/tv-show" element={<TVShow />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/t-feedback" element={<TFeedback />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </>
  );
};

export default App;
