import React, { Component } from 'react';
import ItemsAdministrationComponent from './ItemsAdministrationComponent';
import axios from 'axios';
import { Link } from 'react-router-dom';
import myUrl from '../../AppConfig';
import ModalComponent from '../Modal/ModalComponent';

export default class ItemsAdministrationContainer extends Component {
  constructor() {
    super();
    this.state = {
      clients: [],
    };
  }

  componentDidMount() {
    axios
      .get(`${myUrl}/api/clients`)
      .then((response) => {
        this.setState({ clients: response.data });
        //console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // deleteItem = (e) => {
  //   // e.preventDefault();
  //   axios
  //     .delete(`${myUrl}/api/clients/${e.target.value}`)
  //     .then(() => {
  //       axios
  //         .get(`${myUrl}/api/clients/`)
  //         .then((res) => this.setState({ clients: res.data }));
  //     })
  //     .catch((err) => console.log(err));
  // };
  deleteItem = (event) => {
    event.preventDefault();
    axios
      .delete(`${myUrl}/api/clients/${event.target.value}`)
      .then(() => {
        axios.get(`${myUrl}/api/clients`).then((res) =>
          this.setState({
            clients: res.data,
          })
        );
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <main className="container pt-3">
        <div className="row pb-3">
          <Link to={`/admin/new`} className="btn btn-primary">
            Pridėti klientą
          </Link>
        </div>
        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Vardas</th>
                <th scope="col">Pavardė</th>
                <th scope="col">Gimimo data</th>
                <th scope="col">tel.nr</th>
                <th scope="col"> Pridėti inventorių klientui</th>
                <th scope="col">Atnaujinti duomenis</th>
                <th scope="col"> </th>
              </tr>
            </thead>
            <tbody>
              {this.state.clients.map(
                ({ id, name, lastname, birthdate, phoneNumber, type }) => {
                  return (
                    // <ItemsAdministrationComponent
                    //   client={client}
                    //   key={client.id}
                    //   deleteItem={this.deleteItem}
                    // />
                    <tr>
                      <th scope="row">{id}</th>
                      <td>{name}</td>
                      <td>
                        <Link to={`/clients/${id}`}>{lastname} </Link>
                      </td>
                      <td>{birthdate}</td>
                      <td>{phoneNumber}</td>
                      <td>
                        {' '}
                        <Link
                          className="text-decoration-none mr-3"
                          to={`/admin/client/prideti/inventoriu/${id}`}
                        >
                          Pridėti inventorių {lastname}
                        </Link>
                      </td>
                      <td>
                        {' '}
                        <Link
                          className="text-decoration-none mr-3"
                          to={`/admin/client/atnaujinti/${id}`}
                        >
                          Atnaujinti
                        </Link>
                      </td>
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
                          // className=" btn btn-light"
                          // data-toggle="modal"
                          // data-target={`#staticBackdrop${id}`}
                          // value={id}
                          onClick={this.deleteItem}
                        >
                          Ištrinti
                        </button>
                      </td>
                      {/* <td>
                        <ModalComponent
                          id={id}
                          // email={email}
                          deleteItem={this.deleteItem}
                        />
                      </td> */}
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      </main>
    );
  }
}
