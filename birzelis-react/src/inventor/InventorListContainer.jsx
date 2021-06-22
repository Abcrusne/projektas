import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import myUrl from '../AppConfig';

export default class InventorListContainer extends Component {
  constructor() {
    super();
    this.state = {
      inventories: [],
    };
  }
  componentDidMount() {
    axios
      .get(`${myUrl}/api/inventories`)
      .then((response) => {
        this.setState({ inventories: response.data });
        //console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <main className="container pt-3">
        <div className="row pb-3">
          <Link
            to={`/admin/client/prideti/inventoriu`}
            className="btn btn-primary"
          >
            Pridėti inventorių
          </Link>
        </div>
        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Inventoriaus pavadinimas</th>
                <th scope="col">Svoris</th>
                <th scope="col">Inventoriaus talpinimo sektorius</th>
                <th scope="col">Inventoriaus patalpinimo data</th>
                <th scope="col"> </th>
              </tr>
            </thead>
            <tbody>
              {this.state.inventories.map(
                ({ id, title, weight, sector, date }) => {
                  return (
                    <tr>
                      <th scope="row">{id}</th>
                      <td>{title}</td>
                      {/* <td>
                        <Link to={`/clients/${id}`}>{lastname} </Link>
                      </td> */}
                      <td>{weight}</td>
                      <td>{sector}</td>
                      <td> {date}</td>
                      {/* <td> */}
                      {/* <Link
                          className="text-decoration-none mr-3"
                          to={`/admin/client/prideti/inventoriu/${id}`}
                        >
                          Pridėti inventorių {lastname}
                        </Link> */}
                      {/* </td> */}
                      {/* <td> */}{' '}
                      {/* <Link
                          className="text-decoration-none mr-3"
                          to={`/admin/client/atnaujinti/${id}`}
                        >
                          Atnaujinti
                        </Link>
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
