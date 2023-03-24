import React, { useState } from 'react';
import arrow_close from '../assets/arrow_close.svg';
import arrow_open from '../assets/arrow_open.svg';
import '../styles/accordion.css';

const Accordion = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="accordion__item">
      <div className="accordion__header" onClick={handleClick}>
        <h3>{title}</h3>
        <span className='accordion__arrow'>{isExpanded ? <img src={arrow_close} alt="arrow close" /> : <img src={arrow_open} alt="arrow open" />}</span>
      </div>
      {isExpanded && <div className="accordion__content">{content}</div>}
    </div>
  );
};

export default Accordion;
