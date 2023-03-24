import React from 'react';
import '../styles/banner.css';

const Banner = ({ title, image }) => {
  return (
    <div className='banner'>
      <img className='banner__img' alt='banner' src={image} />
      <div className='banner__bg'></div>
      {title && <p className='banner__title'>{title}</p>}
    </div>
  );
}

export default Banner;
