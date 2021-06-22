import React from 'react';
import { Link } from 'react-router-dom';
import ModalComponent from '../Modal/ModalComponent';

const ItemsAdministrationComponent = ({ client, deleteItem }) => {
  return (
    <tr>
      <th scope="row">{client.id}</th>
      <td>{client.name}</td>
      <td>
        <Link to={`/clients/${client.id}`}>{client.lastname} </Link>
      </td>
      <td>{client.birthdate}</td>
      <td>{client.phoneNumber}</td>
      <td> <Link
        className="text-decoration-none mr-3"
        to={`/admin/client/atnaujinti/${client.id}`}>
          Atnaujinti 
      </Link ></td>
      <td>
        {/* <button className="btn btn-danger" 
        // onClick={deleteItem(client.id)}
        >
          Delete item
        </button> */}
        {/* <Link to="/delete" className="btn btn-danger">
          Delete Item
        </Link> */}
        <button
          className=" btn btn-light"
          data-toggle="modal"
          data-target={`#staticBackdrop${client.id}`}
          value={client.id}
        >
          Ištrinti
        </button>
      </td>
      <td>
        <ModalComponent
          id={client.id}
          // email={email}
          deleteItem={deleteItem}
        />
      </td>
    </tr>
  );
};

export default ItemsAdministrationComponent;
