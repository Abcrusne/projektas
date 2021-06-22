import React, { Component } from 'react';
import axios from 'axios';
import FormComponent from './FormComponent';
import myUrl from '../../AppConfig';

export default class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      desc: '',
      flag: '',
      image: '',
      title: '',
      type: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.title]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios
      .post(`${myUrl}/api/celebrations`, this.state)
      .then((response) => {
        this.props.history.push('/admin');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <main classtitle="container pt-5">
        <FormComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          desc={this.state.desc}
          flag={this.state.flag}
          image={this.state.image}
          title={this.state.title}
          type={this.state.type}
        />
      </main>
    );
  }
}
