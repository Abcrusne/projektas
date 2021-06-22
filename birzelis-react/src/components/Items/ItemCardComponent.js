import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../img/img1.jpg';
import img2 from '../../img/img2.jpg';
import img3 from '../../img/img3.jpg';

const ItemCardComponent = ({ celebration }) => {
  console.log('Greeting Card: ', celebration.id);
  const imgSrc =
    celebration.image === 'img1'
      ? img1
      : celebration.image === 'img2'
      ? img2
      : img3;

  return (
    <div className="card col-12 col-md-6 col-lg-4 my-3">
      <img
        src={imgSrc}
        className="card-img-top"
        alt={celebration.title}
        style={{
          height: '15rem',
          width: '21rem',
        }}
      />
      <div className="card-body ">
        <h5 className="card-name">Title: {celebration.title}</h5>
        <p className="card-text">
          <b>Desc: {celebration.desc} </b>
        </p>
        <p className="card-text">Flag: {celebration.flag}</p>

        <Link to={`/celebrations/${celebration.id}`} className="btn btn-dark">
          More info
        </Link>
      </div>
    </div>
  );
};

export default ItemCardComponent;
