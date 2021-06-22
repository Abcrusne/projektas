import React from 'react';
//import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import lt from 'date-fns/locale/lt';

registerLocale('lt', lt);

function FormComponent({
  handleSubmit,
  handleChange,
  handleChangeDate,
  id,
  name,
  lastname,
  birthdate,
  phoneNumber,
  type,
}) {
  return (
    <form className="container my-5" onSubmit={(e) => handleSubmit(e)}>
      <h3> Pridėti klientą</h3>
      <div className="form-group mb-3 col-6">
        <label htmlFor="name" className="control-label">
          Vardas*:
        </label>
        <input
          type="text"
          placeholder="Vardas"
          className="form-control"
          name="name"
          onChange={handleChange}
          // noValidate
        />

        {/* {errors.firstname.length > 0 && (
                  <span className="error">{errors.firstname}</span>
                )} */}
      </div>
      <div className="form-group mb-3 col-6">
        <label htmlFor="lastname" className="control-label">
          Pavardė*:
        </label>
        <input
          type="text"
          placeholder="Pavardė"
          className="form-control"
          name="lastname"
          onChange={handleChange}
          // noValidate
        />

        {/* {errors.firstname.length > 0 && (
                  <span className="error">{errors.firstname}</span>
                )} */}
      </div>
      <div className="form-group mb-3 col-6  ">
        <label htmlFor="birthdate" className="control-label">
          Gimimo data*:
        </label>
        <div>
          <DatePicker
            className="form-control "
            // dateFormat="yyyy-MM-dd"
            locale="lt"
            name="birthdate"
            maxDate={new Date()}
            selected={birthdate}
            onChange={handleChangeDate}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">
          <b>Tel.nr</b>
        </label>
        <input
          name="phoneNumber"
          placeholder="Numeris"
          type="text"
          className="form-control"
          value={phoneNumber}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-group  col-6 ">
        <label htmlFor="type">
          <b>Pasirinkite kliento tipą</b>
        </label>
        <select
          name="type"
          type="text"
          className="form-control"
          value={type}
          onChange={(e) => handleChange(e)}
        >
          <option value=""></option>
          <option value="USUAL">Paprastas klientas</option>
          <option value="LOYAL">Lojalus klientas</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
}

export default FormComponent;
