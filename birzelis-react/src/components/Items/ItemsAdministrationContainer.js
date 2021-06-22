import React, { Component } from 'react';
import ItemsAdministrationComponent from './ItemsAdministrationComponent';
import axios from 'axios';
import { Link } from 'react-router-dom';
import myUrl from '../../AppConfig';

export default class ItemsAdministrationContainer extends Component {
  constructor() {
    super();
    this.state = {
      celebrations: [],
    };
  }

  componentDidMount() {
    axios
      .get(`${myUrl}/api/celebrations`)
      .then((response) => {
        this.setState({ celebrations: response.data });
        //console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  deleteItem = (e) => {
    e.preventDefault();
    axios
      .delete(`${myUrl}/api/greetings/${e.target.value}`)
      .then(() => {
        axios
          .get(`${myUrl}/api/greetings/`)
          .then((res) => this.setState({ greetings: res.data }));
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <main className="container pt-3">
        <div className="row pb-3">
          <Link to={`/admin/new`} className="btn btn-primary">
            Add new item
          </Link>
        </div>
        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
                <th scope="col"> </th>
              </tr>
            </thead>
            <tbody>
              {this.state.celebrations.map((celebration) => {
                return (
                  <ItemsAdministrationComponent
                    celebration={celebration}
                    key={celebration.id}
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
