import React, { Component } from 'react';
import RequestItem from './RequestItem'
import PropTypes from 'prop-types'

class Requests extends Component {
  render() {
    return this.props.requests.map((request) => (
      <RequestItem key={request.id} request={request} Rented={this.props.Rented}
      delRequest={this.props.delRequest}
      Canceled={this.props.Canceled}/>
      )); 
  }
}

Requests.propTypes = {
  requests: PropTypes.array.isRequired
}

export default Requests;
