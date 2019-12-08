import React from 'react';
import Requests from './components/Requests';

import './App.css';

function App() {
  var state = {
    requests: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting',
        completed: false
      }
    ]
  }
  console.log(state.requests)
  return (
    <div className="App">
      <Requests requests={state.requests}/>
    </div>
  );
  
}

export default App;
