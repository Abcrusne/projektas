import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../img/img1.jpg';
import img2 from '../../img/img2.jpg';
import img3 from '../../img/img3.jpg';

const ItemDetailComponent = ({ celebration }) => {
  const imgSrc =
    celebration.image === 'img1'
      ? img1
      : celebration.image === 'img2'
      ? img2
      : img3;
  return (
    <div>
      <div className="media">
        <img
          className="align-self-start mr-3"
          src={imgSrc}
          alt={celebration.title}
          style={{
            height: '25rem',
          }}
        />
        <div className="media-body mt-3">
          <h2>Title: {celebration.title}</h2>
          <p>Desc: {celebration.desc}</p>
          <p>Type: {celebration.type}</p>
          <p>Flag: {celebration.flag}</p>
        </div>
      </div>
      <div className="row ml-5 mt-3">
        <Link to={'/'} className="btn btn-outline-dark">
          Go back
        </Link>
      </div>
    </div>
  );
};

export default ItemDetailComponent;
