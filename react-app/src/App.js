import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {tasks: []}

  componentDidMount() {
    fetch('/tasks')
      .then(res => res.json())
      .then(tasks => this.setState({ tasks }));
  }

  render() {
    return (
      <div className="App">
        <h1>Your To-Do List</h1>
        {this.state.tasks.map(task =>
          <div key={task.id}>{task.taskName}</div>
        )}
      </div>
    );
  }
}
export default App;
