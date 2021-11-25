import './App.css';
import React, { Component } from "react";
import Ninjas from './Ninjas'
class App extends React.Component
{
  state = {
    ninjas: [
      { name: 'hachem', age: 31, belt: 'white', id: 1 },
      { name: 'ahmed', age: 30, belt: 'white', id: 2 },
      { name: 'Amir', age: 32, belt: 'white', id: 3 }
    ]
  }
  render()
  {
    return (
      <div className="App" >
        <h1>hachem</h1>
        <Ninjas ninjas={this.state.ninjas}  ></Ninjas>
      </div>
    );
  }
}

export default App;
