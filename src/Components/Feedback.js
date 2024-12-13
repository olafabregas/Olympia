import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ThankYou.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

// This component handles the feedback form
function FeedbackForm() {
  const [email, setEmail] = useState(""); // State to store the user's email
  const [feedback, setFeedback] = useState(""); // State to store the user's feedback
  const [error, setError] = useState(null); // State to store any error messages
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Check if all fields are filled
    if (!email || !feedback) {
      setError("Please fill in all fields.");
      return;
    }

    // Clear the error state and navigate to the "Thank You" page
    setError(null);
    navigate("/t-feedback"); // Redirect to "Thank You" page
  };

  return (
    <>
      <Navbar />
      <div className="feedback-form">
        <h2 style={{ textAlign: "center" }}>Provide Your Feedback</h2>
        <form onSubmit={handleSubmit}>
          {/* Display error messages if any */}
          {error && (
            <p style={{ textAlign: "center", color: "red" }}>{error}</p>
          )}

          {/* Feedback input field */}
          <textarea
            id="feedback"
            name="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)} // Update feedback state
            required
            placeholder="Enter your feedback here"
            style={{ width: "100%", height: "200px", resize: "vertical" }}
          />

          {/* Email input field */}
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
            required
            style={{ width: "100%" }}
          />

          {/* Submit button */}
          <button type="submit">Submit Feedback</button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default FeedbackForm;
