import React, { Component } from "react";
import axios from "axios";

class MakeApiCall extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }
  componentDidMount() {
    const config = {
      headers: { "Access-Control-Allow-Origin": "*" },
    };
    const url = "http://localhost:8080/weatherforecast";
    axios
      .get(url, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return <h1>Weatherforecast Data</h1>;
  }
}

export default MakeApiCall;
