import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Applicant from "./components/Applicant";
import React from "react";

class App extends React.Component {
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
      <>
        <Header />
        <div className="lower--container">
          <Form onChange={this.onChange} />
          <Applicant state={this.state} />
        </div>
      </>
    );
  }
}

export default App;
