import React, { useState } from 'react';
import arrow_close from '../assets/arrow_close.svg';
import arrow_open from '../assets/arrow_open.svg';
import '../styles/accordion.css';

/**
 * Accordion component that displays a title and expandable/collapsible content.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the accordion.
 * @param {string|React.ReactNode} props.content - The content of the accordion.
 * @returns {JSX.Element} The rendered Accordion component.
 */
const Accordion = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  /**
   * Toggles the expanded state of the accordion when the header(title) is clicked.
   */
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
