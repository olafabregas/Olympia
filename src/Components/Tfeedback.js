import React from "react";
import Navbar from "./Navbar"; // Ensure consistency with your site
import Footer from "../Footer"; // Import Footer for consistency
import "../styles/ThankYou.css"; // Create this CSS file for styling

const ThankYou = () => {
  return (
    <>
      <Navbar />
      <div className="thank-you-container">
        <div className="thank-you-box">
          <h1 className="thank-you-header">Thank You for Your Feedback!</h1>
          <p className="thank-you-message">
            Your feedback helps us improve and provide a better experience for
            everyone.
          </p>
          <p className="thank-you-message-secondary">
            We appreciate you taking the time to share your thoughts with us.
          </p>
          <button
            className="thank-you-button"
            onClick={() => (window.location.href = "/")} // Redirects to the homepage
          >
            Return to Homepage
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ThankYou;
