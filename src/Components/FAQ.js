import React, { useState } from "react";
import "../styles/faq.css";
import faqdata from "../Data/faqdata";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <Navbar />

      <section className="faq">
        {faqdata.map((item, index) => (
          <div key={index} className="faq-item">
            <h2 className="question" onClick={() => toggleFaq(index)}>
              <i class="bi bi-question-circle-fill"></i> {item.question}
            </h2>
            {openIndex === index && <p className="answer">{item.answer}</p>}
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
};

export default Faq;
