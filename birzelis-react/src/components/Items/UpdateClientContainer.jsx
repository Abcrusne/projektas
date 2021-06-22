import React, { Component } from 'react';
import myUrl from '../../AppConfig';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class UpdateClientContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      lastname: '',
      birthdate: '',
      phoneNumber: '',
      type: '',
    };
  }
  componentDidMount() {
    axios
      .get(`${myUrl}/api/clients/${this.props.match.params.id}`)
      .then((res) =>
        this.setState({
          id: res.data.id,
          name: res.data.name,
          lastname: res.data.lastname,
          birthdate: res.data.birthdate,
          phoneNumber: res.data.phoneNumber,
          type: res.data.type,
        })
      )
      .catch((err) => console.log(err));
  }

  handleChange = (event) => {
    // event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${myUrl}/api/clients/${this.state.id}`, {
        id: this.state.id,
        name: this.state.name,
        lastname: this.state.lastname,
        birthdate: this.state.birthdate,
        phoneNumber: this.state.phoneNumber,
        type: this.state.type,
      })
      .then((response) => {
        this.props.history.push('/admin');
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="container mt-5 shadow p-3 mb-5 bg-white rounded">
          <div className="mb-4">
            <h3>Atnaujinti Kliento duomenis</h3>
          </div>
          <form onSubmit={this.handleSubmit} noValidate className="form-group ">
            <div className="mb-3">
              <label htmlFor="name" className="control-label">
                Kliento vardas*:
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={this.handleChange}
                noValidate
                value={this.state.name}
              />
              {/* {errors.firstname.length > 0 && (
                <span className="error">{errors.firstname}</span>
              )} */}
            </div>
            <div className="mb-3">
              <label htmlFor="lastname" className="control-label">
                Kliento pavardė*:
              </label>
              <input
                type="text"
                className="form-control"
                name="lastname"
                onChange={this.handleChange}
                noValidate
                value={this.state.lastname}
              />
              {/* {errors.lastname.length > 0 && (
                <span className="error">{errors.lastname}</span>
              )} */}
            </div>
            {/* <div className="mb-3">
              <label htmlFor="birthdate" className="control-label">
                Vartotojo Gimimo data*:
              </label>
              <input
                type="birthdate"
                className="form-control"
                name="birthdate"
                onChange={this.handleChange}
                noValidate
                value={this.state.birthdate}
              />
        
            </div> */}
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="control-label">
                Kliento tel.nr*:
              </label>
              <input
                type="text"
                className="form-control"
                name="phoneNumber"
                onChange={this.handleChange}
                noValidate
                value={this.state.phoneNumber}
              />
              {/* {errors.lastname.length > 0 && (
                <span className="error">{errors.lastname}</span>
              )} */}
            </div>
            <div className="mb-3">
              <label htmlFor="role" className="control-label">
                Parinkite Kliento tipą*:
              </label>
              <select
                type="type"
                className="form-control"
                name="type"
                onChange={this.handleChange}
                noValidate
                value={this.state.type}
              >
                <option value=""></option>
                <option value="USUAL">Paprastas klientas</option>
                <option value="LOYAL">Lojalus klientas</option>
              </select>
              {/* {errors.role.length > 0 && (
                  <span className="error">{errors.role}</span>
                )} */}
            </div>
            <div> * - privalomi laukai</div>
            <div>
              <button type="submit" className="btn">
                Išsaugoti
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
