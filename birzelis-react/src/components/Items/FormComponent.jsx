import React from 'react';
//import { Link } from 'react-router-dom';

function FormComponent({
  handleSubmit,
  handleChange,
  desc,
  flag,
  image,
  title,
  type,
}) {
  return (
    <form className="container my-5" onSubmit={(e) => handleSubmit(e)}>
      <div className="form-group">
        <label htmlFor="title">
          <b>Title</b>
        </label>
        <input
          title="title"
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="desc">
          <b>Description</b>
        </label>
        <input
          title="desc"
          type="text"
          className="form-control"
          value={desc}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-group  col-6 ">
        <label htmlFor="flag">
          <b>Flag</b>
        </label>
        <select
          title="flag"
          type="text"
          className="form-control"
          value={flag}
          onChange={(e) => handleChange(e)}
        >
          <option value=""></option>
          <option value="Yes">YES</option>
          <option value="No">NO</option>
        </select>
      </div>
      <div className="form-group col-6">
        <label htmlFor="image">
          <b>Select an image</b>
        </label>
        <select
          title="image"
          className="form-control"
          value={image}
          onChange={(e) => handleChange(e)}
        >
          <option value=""></option>
          <option value="img1">img1</option>
          <option value="img2">img2</option>
          <option value="img3">img3</option>
        </select>
      </div>
      <div className="form-group col-6">
        <label htmlFor="type">
          <b>Select Type</b>
        </label>
        <select
          value={type}
          className="form-control"
          title="type"
          id="type"
          onChange={(e) => handleChange(e)}
        >
          <option value=""></option>
          <option value="NATIONAL">NATIONAL</option>
          <option value="RELIGIOUS">RELIGIOUS </option>
          <option value="MEMORY">MEMORY</option>
          <option value="NOT_TRADITIONAL">NOT TRADITIONAL</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
}

export default FormComponent;
