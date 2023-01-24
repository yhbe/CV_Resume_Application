import React from "react";

export default class Form extends React.Component {
  render(props) {
    this.componentDidUpdate = () => {
      if (this.props.state.edit === true) {
        document.querySelector(
          "#first--name"
        ).value = `${this.props.state.firstname}`;
        document.querySelector(
          "#last--name"
        ).value = `${this.props.state.lastname}`;
        document.querySelector("#title").value = `${this.props.state.title}`;
        document.querySelector(
          "#address"
        ).value = `${this.props.state.address}`;
        document.querySelector(
          "#phonenumber"
        ).value = `${this.props.state.phonenumber}`;
        document.querySelector(
          "#form--description"
        ).value = `${this.props.state.description}`;
      }
    };
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
              onChange={this.props.onChange}
            />
          </label>
          <label htmlFor="lastname">
            <input
              type="text"
              name="lastname"
              id="last--name"
              placeholder="Last name"
              onChange={this.props.onChange}
            />
          </label>
          <label htmlFor="title">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              onChange={this.props.onChange}
            />
          </label>
          <label htmlFor="address">
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Address"
              onChange={this.props.onChange}
            />
          </label>
          <label htmlFor="phonenumber">
            <input
              type="number"
              name="phonenumber"
              id="phonenumber"
              placeholder="Phone number"
              onChange={this.props.onChange}
            />
          </label>
          <label htmlFor="description">
            <textarea
              type="text"
              name="description"
              id="form--description"
              placeholder="Description"
              maxLength={369}
              onChange={this.props.onChange}
            />
          </label>
        </form>
      </div>
    );
  }
}
