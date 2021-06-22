import React from 'react';
import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import img1 from '../../img/img1.jpg';
import img2 from '../../img/img2.jpg';
import img3 from '../../img/img3.jpg';
import ModalComponent from '../Modal/ModalComponent';

const ItemsAdministrationComponent = ({ celebration, deleteItem }) => {
  const imgSrc =
    celebration.image === 'img1'
      ? img1
      : celebration.image === 'img2'
      ? img2
      : img3;
  return (
    <tr>
      <th scope="row">{celebration.id}</th>
      <td>
        {' '}
        <img
          src={imgSrc}
          //src={celebration.image}
          className="card-img-top"
          style={{ width: 50, height: 50 }}
          alt={celebration.title}
        />
      </td>
      <td>
        <Link to={`/celebrations/${celebration.id}`}>{celebration.title} </Link>
      </td>
      <td>
        {/* <button className="btn btn-danger" 
        // onClick={deleteItem(celebration.id)}
        >
          Delete item
        </button> */}
        {/* <Link to="/delete" className="btn btn-danger">
          Delete Item
        </Link> */}
        <button
          className=" btn btn-light"
          data-toggle="modal"
          data-target={`#staticBackdrop${celebration.id}`}
          value={celebration.id}
        >
          Ištrinti
        </button>
      </td>
      <td>
        <ModalComponent
          id={celebration.id}
          // email={email}
          deleteItem={deleteItem}
        />
      </td>
    </tr>
  );
};

export default ItemsAdministrationComponent;
