import React, { Component } from 'react';
import ItemsAdministrationComponent from './ItemsAdministrationComponent';
import axios from 'axios';
import { Link } from 'react-router-dom';
import myUrl from '../../AppConfig';

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
  deleteItem = (e) => {
    e.preventDefault();
    axios
      .delete(`${myUrl}/api/clients/${e.target.value}`)
      .then(() => {
        axios
          .get(`${myUrl}/api/clients/`)
          .then((res) => this.setState({ clients: res.data }));
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
                <th scope="col">Atnaujinti duomenis</th>
                <th scope="col"> </th>
              </tr>
            </thead>
            <tbody>
              {this.state.clients.map((client) => {
                return (
                  <ItemsAdministrationComponent
                    client={client}
                    key={client.id}
                    deleteItem={this.deleteItem}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    );
  }
}
