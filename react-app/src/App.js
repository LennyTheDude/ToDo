import React, { useState, useEffect } from 'react';
import './App.css';
import api from './utils/api';
import Task from './task';

const App = () => {
  const [tasks, setTasks] = useState([])
  const [orderBy, setOrderBy] = useState("DESC")
  
  // componentDidMount() {
  //   fetch('/tasks')
  //     .then(res => res.json())
  //     .then(tasks => this.setState({ tasks }));
  // }
  useEffect( async () => {
    const query = {"orderBy": `${orderBy}`}
    const result = await api.get(
      '/tasks/', query
    );

    const final = [];
    console.log(orderBy);

    // result.data.map((task) => {
    //   final.push([task.id, task.isDone, task.taskName])
    // });
    setTasks(result.data);

  }, [])

  return (
    <div className="App">
      <h1>Your To-Do List</h1>
      <ul>
        {tasks.map(task => (
          <Task {...task}/>
        ))}
      </ul>
    </div>
  );
}
export default App;
