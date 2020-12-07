import logo from './logo.svg';
import React, { Component } from "react";
import NameForm from "./components/NameForm"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return(
      <div>
        <NameForm />
      </div>
    );
  }
}

export default App;
