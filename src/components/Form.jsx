import React from "react";

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form className="application--form">
          <h2>Personal Information</h2>
          <label htmlFor="first--name">
            <input
              type="text"
              name="first--name"
              id="first--name"
              placeholder="First name"
            />
          </label>
          <label htmlFor="last--name">
            <input
              type="text"
              name="last--name"
              id="last--name"
              placeholder="Last name"
            />
          </label>
          <label htmlFor="title">
            <input type="text" name="title" id="title" placeholder="Title" />
          </label>
          <label htmlFor="address">
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Address"
            />
          </label>
          <label htmlFor="phonenumber">
            <input
              type="number"
              name="phonenumber"
              id="phonenumber"
              placeholder="Phone number"
            />
          </label>
          <label htmlFor="description">
            <textarea
              type="text"
              name="description"
              id="form--description"
              placeholder="Description"
            />
          </label>
        </form>
      </div>
    );
  }
}
