import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";

export default class Student extends Component {
  constructor() {
    super();

    this.state = {
      studentInfo: {}
    };
  }

  componentDidMount() {
    console.log(this.props.match)
    return axios.get(`http://localhost:3005/students/${this.props.match.params.id}`).then( results => {
      this.setState({
        studentInfo: results.data
      });
    });
  }
    
  render() {
    console.log('Hi')
    return (
      <div className='box'>
        <h1>Student:</h1>
        <h1>{this.state.studentInfo.first_name} {this.state.studentInfo.last_name}</h1>
        <h3>Grade: {this.state.studentInfo.grade}</h3>
        <h3>Email: {this.state.studentInfo.email}</h3>
        <div>
        {/* <input type="button" value="Go back!" onclick={history.goBack}/> */}
      </div>
      </div>
    )
  }
}