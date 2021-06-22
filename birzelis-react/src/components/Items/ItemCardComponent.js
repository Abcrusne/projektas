import React from 'react';
import { Link } from 'react-router-dom';

const ItemCardComponent = ({ client }) => {
  console.log('client id: ', client.id);

  return (
    <div className="card col-12 col-md-6 col-lg-4 my-3">
      <div className="card-body ">
        <h5 className="card-name">Vardas: {client.name}</h5>
        <p className="card-text">
          <b>Pavardė: {client.lastname} </b>
        </p>
        <p className="card-text">Numeris: {client.phoneNumber}</p>

        <Link to={`/clients/${client.id}`} className="btn btn-dark">
          Plačiau
        </Link>
      </div>
    </div>
  );
};

export default ItemCardComponent;
