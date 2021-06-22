import React from 'react';
import { Link } from 'react-router-dom';

const ItemDetailComponent = ({ client }) => {
  return (
    <div>
      <div className="media">
        <div className="media-body mt-3">
          <h2>Vardas: {client.name}</h2>
          <p>Pavardė: {client.lastname}</p>
          <p>Gimimo data: {client.birthdate}</p>
          <p>Tel.nr: {client.phoneNumber}</p>
          <p>Kliento tipas: {client.type}</p>
        </div>
      </div>
      <div className="row ml-5 mt-3">
        <Link to={'/'} className="btn btn-outline-dark">
          Atgal
        </Link>
      </div>
    </div>
  );
};

export default ItemDetailComponent;
