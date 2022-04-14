import React from 'react'
import propTypes from "prop-types";
import './card.css';

function Card({title, imageSource, url, text}) {
  return (
    <div className='card text-center bg-dark animate__animated animate__fadeInUp'>
      <div className='overflow'>
      <img src={imageSource} className="card-img-top"/>
      </div>
      <div className='card-body text-light'>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text text-secundary'>
          {
            text ? text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
          }
        </p>
        <a href={url} className='btn btn-outline-secondary rounded-0' target="_blank">
            Go to this website
        </a>
      </div>
    </div>
  )
}
Card.propTypes={
  title: propTypes.string.isRequired,
  url: propTypes.string,
  imageSource:propTypes.string,
  text:propTypes.string
}

export default Card
