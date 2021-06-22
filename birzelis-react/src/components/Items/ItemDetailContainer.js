import React, { Component } from 'react';
import axios from 'axios';
import ItemDetailComponent from './ItemDetailComponent';
import myUrl from '../../AppConfig';

export default class ItemDetailContainer extends Component {
  constructor() {
    super();
    this.state = {
      clients: {},
    };
  }

  componentDidMount() {
    axios
      .get(`${myUrl}/api/clients/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({ clients: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <main className="container">
        <div className="row">
          <ItemDetailComponent client={this.state.clients} />
        </div>
      </main>
    );
  }
}
