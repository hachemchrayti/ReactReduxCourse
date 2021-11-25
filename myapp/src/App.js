import './App.css';
import React, { Component } from "react";
import Ninjas from './Ninjas'
import AddNinja from "./AddNinja";
class App extends React.Component
{
  state = {
    ninjas: [
      { name: 'hachem', age: 31, belt: 'white', id: 1 },
      { name: 'ahmed', age: 30, belt: 'white', id: 2 },
      { name: 'Amir', age: 32, belt: 'white', id: 3 }
    ]
  }

  AddNinja = (ninja) =>
  {
    console.log(ninja)
    ninja.id = Math.random()
    let oldArr = [...this.state.ninjas, ninja]

    this.setState({
      ninjas: oldArr
    })
  }

  DeleteNinja = (id) =>
  {

    let oldArr = this.state.ninjas.filter(n => n.id !== id)

    this.setState({
      ninjas: oldArr
    })
  }


  render()
  {
    return (
      <div className="App" >
        <h1>hachem</h1>
        <Ninjas ninjas={this.state.ninjas} DeleteNinja={this.DeleteNinja}></Ninjas>
        <AddNinja AddNinja={this.AddNinja} />
      </div>
    );
  }
}

export default App;
