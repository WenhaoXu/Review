import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Container from './containsGroup/containerGroup'
class App extends Component {
    constructor(props){
        super(props)
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
         <Container   index={1}></Container>
          <Container index={2}></Container>
          <Container   index={3}></Container>
      </div>
    );
  }
}

export default App;
