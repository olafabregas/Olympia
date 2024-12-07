import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="thank-you-container">
      <h1>Thank You!</h1>
      <p>Your submission has been received. We will get back to you shortly.</p>
      <Link to="/">Go Back to Home</Link> {/* Link to the homepage */}
    </div>
  );
};

export default ThankYou;
