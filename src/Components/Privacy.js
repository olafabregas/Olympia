import React, { useEffect, useState } from "react";
import NavBar from "../Components/Navbar";
import privacyPolicyData from "../Data/PrivacyData";
import "../styles/Privacy.css";
import Footer from "./Footer";
// Import FontAwesome resources
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Add all solid icons to the library globally
library.add(fas);

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
              <FontAwesomeIcon
                icon={["fas", item.icon.replace("fas fa-", "")]}
                className="mr-2 text-[#00ffff] hover:text-[#00ffff]"
                style={{ textShadow: "0 0 8px #00ffff" }}
              />{" "}
              {item.title}
            </h2>
            <div className="policy-content" id={`content-${index}`}>
              {item.content} {/* Render JSX content */}
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
