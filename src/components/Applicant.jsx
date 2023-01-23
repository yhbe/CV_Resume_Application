import { Component } from "react";
import image from "./images/dog.jpg";

export default class Applicant extends Component {
  render(props) {
    return (
      <div className="applicant--container">
        <img className="profile--image" src={image} alt="" />
        <div>
          <span className="applicant--firstname">
            {this.props.state.firstname}
          </span>
          <span className="applicant--lastname">
            {" "}
            {this.props.state.lastname}
          </span>
          <p className="applicant--title">{this.props.state.title}</p>
          <p className="applicant--address">{this.props.state.address}</p>
          <p className="applicant--phonenumber">
            {this.props.state.phonenumber}
          </p>
          <p className="applicant--description">
            {this.props.state.description}
          </p>
        </div>
      </div>
    );
  }
}
