import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Components
import FAQPage from "../Components/FAQ";
import Feedback from "../Components/Feedback";
import HomePage from "../Components/Home";
import Login from "../Components/Login";
import Movies from "../Components/Movies";
import NavBar from "../Components/Navbar";
import NewAndPop from "../Components/NewandPop";
import PrivacyPolicyPage from "../Components/Privacy";
import SignUp from "../Components/SignUp";
import TFeedback from "../Components/Tfeedback";
import TSignup from "../Components/TSignup";
import TVShow from "../Components/TVShow";
import Footer from "../Components/Footer";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <main className="min-h-screen bg-jet-black text-white">
        <Routes>  
          <Route path="/" element={<HomePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/new-and-pop" element={<NewAndPop />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/t-signup" element={<TSignup />} />
          <Route path="/tv-show" element={<TVShow />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/t-feedback" element={<TFeedback />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default AppRouter;
