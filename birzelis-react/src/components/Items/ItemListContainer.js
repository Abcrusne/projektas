import React, { Component } from 'react';
import axios from 'axios';
import ItemCardComponent from './ItemCardComponent';
import myUrl from '../../AppConfig';

export default class ItemListContainer extends Component {
  constructor() {
    super();
    this.state = {
      clients: [],
    };
  }

  componentDidMount() {
    axios
      .get(`${myUrl}/api/clients`)
      .then((res) => {
        this.setState({ clients: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    // const { data } = this.state.clients;

    // if (data) {
    return (
      <div className="container pt-4">
        <div className="row d-flex justify-content-center">
          <h3> Sąrašas</h3>
          {this.state.clients.map((client) => {
            return <ItemCardComponent client={client} key={client.id} />;
          })}
        </div>
      </div>
    );
    // } else {
    //   return (
    //     <div className="text-center">
    //       <div className="spinner-border m-5 text-dark" role="status">
    //         <span className="sr-only">Loading...</span>
    //       </div>
    //     </div>
    //   );
    // }
  }
}
