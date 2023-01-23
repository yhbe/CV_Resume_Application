import React from "react";

export default class Form extends React.Component {
  state = JSON.parse(localStorage.getItem("todoForm")) || {
    firstname: "",
    lastname: "",
    title: "",
    address: "",
    phonenumber: "",
    description: "",
  };

  onChange = (event) => {
    this.setState((prevState) => ({ [event.target.name]: event.target.value }));
  };

  componentDidUpdate() {
    localStorage.setItem("todoForm", JSON.stringify(this.state));
  }

  render() {
    return (
      <div>
        <form className="application--form">
          <h2>Personal Information</h2>
          <label htmlFor="firstname">
            <input
              type="text"
              name="firstname"
              id="first--name"
              placeholder="First name"
              onChange={this.onChange}
            />
          </label>
          <label htmlFor="lastname">
            <input
              type="text"
              name="lastname"
              id="last--name"
              placeholder="Last name"
              onChange={this.onChange}
            />
          </label>
          <label htmlFor="title">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              onChange={this.onChange}
            />
          </label>
          <label htmlFor="address">
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Address"
              onChange={this.onChange}
            />
          </label>
          <label htmlFor="phonenumber">
            <input
              type="number"
              name="phonenumber"
              id="phonenumber"
              placeholder="Phone number"
              onChange={this.onChange}
            />
          </label>
          <label htmlFor="description">
            <textarea
              type="text"
              name="description"
              id="form--description"
              placeholder="Description"
              onChange={this.onChange}
            />
          </label>
        </form>
      </div>
    );
  }
}
