import React, { Component } from 'react';
import axios from 'axios';
import FormComponent from './FormComponent';
import myUrl from '../../AppConfig';

export default class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      name: '',
      lastname: '',
      birtdate: '',
      phoneNumber: '',
      type: '',
    };
  }

  // handleChange = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   });
  // };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  
  handleChangeDate = (date) => {
    this.setState({
      birthdate: date,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios
      .post(`${myUrl}/api/clients`, this.state)
      .then((response) => {
        this.props.history.push('/admin');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <main className="container pt-5">
        <FormComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleChangeDate={this.handleChangeDate}
          id={this.state.id}
          name={this.state.name}
          lastname={this.state.lastname}
          birthdate={this.state.birthdate}
          phoneNumber={this.state.phoneNumber}
          type={this.state.type}
        />
      </main>
    );
  }
}
