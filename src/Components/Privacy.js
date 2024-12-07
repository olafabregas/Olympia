import React, { useEffect, useState } from "react";
import NavBar from "../Components/Navbar"; 
import privacyPolicyData from "../Data/PrivacyData"; 
import "../styles/Privacy.css";

const PrivacyPolicyPage = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState([]);

  useEffect(() => {
    setPrivacyPolicy(privacyPolicyData); 
  }, []);

  const toggleContent = (index) => {
    const content = document.getElementById(`content-${index}`);
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  };

  return (
    <div>
      <NavBar />
      <section className="privacy-policy">
        {privacyPolicy.map((item, index) => (
          <div className="policy-item" key={index}>
            <h2 className="policy-title" onClick={() => toggleContent(index)}>
              <i className={item.icon}></i> {item.title}
            </h2>
            <div className="policy-content" id={`content-${index}`}>
              {item.content} {/* Render JSX content */}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
