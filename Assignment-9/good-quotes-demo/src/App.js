import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from "firebase";

// Initialize Firebase
 var config = {
   apiKey: "AIzaSyAa1R67l6GtrdvqHirBryiyWq8sGAaEUYk",
   authDomain: "assignment-9-itdev.firebaseapp.com",
   databaseURL: "https://assignment-9-itdev.firebaseio.com",
   projectId: "assignment-9-itdev",
   storageBucket: "assignment-9-itdev.appspot.com",
   messagingSenderId: "442344322508"
 };
 var firebaseApp = firebase.initializeApp(config);

class App extends Component {
constructor(props){
  super(props);

  //create input references
  this.textInput = React.createRef();
  this.autherInput = React.createRef();

  //set up react state
  this.state = {
    quotes: [];
  };
}

componentWillMount(){
  //get db references
  let db = firebaseApp.database.ref('quotes');

  //wire event handler to handle when a new quote is added to firebaseio
  db.on('child_added', snapshot => {});
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
