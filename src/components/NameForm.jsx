import React, { Component } from "react";
import RecommendationDataService from "../services/recommendation.service";

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', recommendations: []};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);

      RecommendationDataService.get(this.state.value)
        .then(response => {
          this.setState({
            recommendations: response.data
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });

      
      event.preventDefault();
    }
  
    render() {
      const recommendations = this.state.recommendations;
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              AccountID:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          {recommendations.map(recommendation => (
            <p>{recommendation}</p>
          ))}
        </div>
      );
    }
  }

  export default NameForm;