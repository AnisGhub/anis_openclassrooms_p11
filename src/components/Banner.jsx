import React from 'react';
import '../styles/banner.css';

const Banner = ({ title, image }) => {
  return (
    <div className='banner'>
      <img className='banner__img' alt='banner' src={image} />
      <div className='banner__bg'></div>
      {title && <h1 className='banner__title'>{title}</h1>}
    </div>
  );
}

export default Banner;
