import { useState } from 'react';
import '../styles/carousel.css';
import arrow_prev from '../assets/arrow_prev.svg';
import arrow_next from '../assets/arrow_next.svg';

/**
 * Carousel component that displays a slideshow of pictures.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string[]} props.pictures - An array of picture URLs.
 * @returns {JSX.Element} The rendered Carousel component.
 */
const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * Handles the click event when the previous button is clicked.
   */
  const handleClickPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  /**
   * Handles the click event when the next button is clicked.
   */
  const handleClickNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (pictures.length <= 1) {
    return (
      <div className="carousel">
        <img className="carousel__img" src={pictures[0]} alt="" />
      </div>
    );
  }

  return (
    <div className="carousel">
      <button className="carousel__prev" onClick={handleClickPrev}>
        <img src={arrow_prev} alt="Previous" />
      </button>
      <img className="carousel__img" src={pictures[currentIndex]} alt="" />
      <button className="carousel__next" onClick={handleClickNext}>
        <img src={arrow_next} alt="Previous" />
      </button>
      <div className="carousel__indicators">
        {pictures.map((_, index) => (
            <div
            key={index}
            className={`carousel__indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            > 
                {index === currentIndex && `${index + 1}/${pictures.length}`}
            </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;