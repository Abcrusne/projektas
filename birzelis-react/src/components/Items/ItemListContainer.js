import React, { Component } from 'react';
import axios from 'axios';
import ItemCardComponent from './ItemCardComponent';
import myUrl from '../../AppConfig';

export default class ItemListContainer extends Component {
  constructor() {
    super();
    this.state = {
      celebrations: [],
    };
  }

  componentDidMount() {
    axios
      .get(`${myUrl}/api/celebrations`)
      .then((res) => {
        this.setState({ celebrations: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    // const { data } = this.state.celebrations;

    // if (data) {
    return (
      <div className="container pt-4">
        <div className="row d-flex justify-content-center">
          {this.state.celebrations.map((celebration) => {
            return (
              <ItemCardComponent
                celebration={celebration}
                key={celebration.id}
              />
            );
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
