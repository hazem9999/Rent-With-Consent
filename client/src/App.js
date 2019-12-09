import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Requests from './components/Requests';
import Header from './components/layout/Header';
import './App.css';
import AddRequest from './components/AddRequest'
import About from './components/pages/About'
import TheMap from './components/pages/TheMap'
import axios from 'axios';
import Swal from 'sweetalert2'

class App extends Component {
  state = {
    requests: [{
      id: 1,
      title: 'Take out the trash',
      completed: false
    },
    {
      id: 2,
      title: 'Dinner',
      completed: true
    },
    {
      id: 3,
      title: 'Meeting',
      completed: false
    }]
  }

  componentDidMount() {
    axios.get('')
  }

  // Toggle Complete
  Rented = (id) => {
    this.setState({ requests: this.state.requests.map(request => {
      if(request.id === id) {
        request.completed = true
      }
      return request;
    })})
    Swal.fire(
      'Rented!',
      'successfuly rented, please call the owner or head straight to his location',
      'success'
    )
  }
  Canceled = (id) => {
    this.setState({ requests: this.state.requests.map(request => {
      if(request.id === id) {
        request.completed = false
      }
      return request;
    })})
    Swal.fire(
      'Canceled',
      'Request is canceled, this request is avaiable again',
      'error'
    )
  }

delRequest = (id) => {
  this.setState({requests: [...this.state.requests.filter(request => request.id!==id)]})
}

addRequest = (title) => {
  const newRequest = {
    id:4,
    title,
    completed: false
  }
  this.setState({requests: [...this.state.requests, newRequest]})
}

  render() {
    return (
      <Router>
        <div className="container">
        <div className="App">
          <Route exact path='/' render= {props=>(
            <React.Fragment>
              <Header/>
              <AddRequest addRequest={this.addRequest}/>
              <Requests requests={this.state.requests} Rented={this.Rented} Canceled={this.Canceled}
              delRequest={this.delRequest}/>
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />  
          <Route path="/TheMap" component={TheMap} />  
        </div>
        </div>

      </Router>
    );
  }
  
}

export default App;
