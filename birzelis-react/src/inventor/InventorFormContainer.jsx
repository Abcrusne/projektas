import React, { Component } from 'react';
import axios from 'axios';
import myUrl from '../AppConfig';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import lt from 'date-fns/locale/lt';

registerLocale('lt', lt);

export default class InventorFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      title: '',
      weight: '',
      sector: '',
      date: '',
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleChangeDate = (date) => {
    this.setState({
      date: date,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios
      .post(`${myUrl}/api/inventories`, this.state)
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
        <form className="container my-5" onSubmit={this.handleSubmit}>
          <div className="form-group mb-3 col-6">
            <label htmlFor="title" className="control-label">
              Inventoriaus pavadinimas*:
            </label>
            <input
              type="text"
              placeholder="Pavadinimas"
              className="form-control"
              name="title"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group mb-3 col-6">
            <label htmlFor="weight" className="control-label">
              Svoris (įrašykite pvz: 10.4)*:
            </label>
            <input
              type="text"
              placeholder="Svoris"
              className="form-control"
              name="weight"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group mb-3 col-6">
            <label htmlFor="sector" className="control-label">
              Sektorius (nuo 1 iki 40)*:
            </label>
            <input
              type="text"
              placeholder="Sektorius"
              className="form-control"
              name="sector"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group mb-3 col-6  ">
            <label htmlFor="ate" className="control-label">
              Data*:
            </label>
            <div>
              <DatePicker
                className="form-control "
                // dateFormat="yyyy-MM-dd"
                locale="lt"
                name="date"
                maxDate={new Date()}
                selected={this.state.date}
                onChange={this.handleChangeDate}
              />
            </div>
          </div>
          <div className="form-group mb-3 col-6  ">
            <button type="submit" className="btn btn-primary">
              Išsaugoti
            </button>
          </div>
        </form>
      </main>
    );
  }
}
