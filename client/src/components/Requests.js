import React, { Component } from 'react';
import RequestItem from './RequestItem'

class Requests extends Component {
  render() {
    return this.props.requests.map((request) => (
      <RequestItem/>
      )); 
  }
}

export default Requests;
