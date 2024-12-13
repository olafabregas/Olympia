import React from "react";
import Signin from "./Components/Signin";
import CreateAccount from "./Components/CreateAccount";
import { Routes, Route } from "react-router-dom";
import Main from "./Components/Main";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Trailer from "./Components/Trailer";
import TVShow from "./Components/TVShow";
import NewPop from "./Components/NewandPop";
import PrivacyPolicyPage from "./Components/Privacy";
import ThankYou from "./Components/Tfeedback";
import Footer from "./Components/Footer";
import FAQPage from "./Components/FAQ";
import FeedbackForm from "./Components/Feedback";
import MoviePage from "./Components/MoviePage";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/react-fontawesome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/details" element={<Details />} />
        <Route path="/trailer" element={<Trailer />} />
        <Route path="/tv-show" element={<TVShow />} />
        <Route path="/new-and-pop" element={<NewPop />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/tv-show" element={<TVShow />} />
        <Route path="/t-feedback" element={<ThankYou />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/movies" element={<MoviePage />} />
      </Routes>
    </>
  );
};

export default App;
