import React, { useState } from 'react';
import '../styles/faq.css';
import faqdata from '../Data/faqdata';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq">
      {faqdata.map((item, index) => (
        <div key={index} className="faq-item">
          <h2
            className="question"
            onClick={() => toggleFaq(index)}
          >
            <i className="fas fa-question-circle"></i> {item.question}
          </h2>
          {openIndex === index && <p className="answer">{item.answer}</p>}
        </div>
      ))}
    </section>
  );
};

export default Faq;
