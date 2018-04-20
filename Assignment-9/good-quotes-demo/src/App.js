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
  this.authorInput = React.createRef();

  //set up react state
  this.state = {
    quotes: []
  };
}

componentWillMount(){
  //get db references
  let db = firebaseApp.database().ref('quotes');

  //wire event handler to handle when a new quote is added to firebaseio
  db.on('child_added', snapshot => {
    //update react state
    let data = snapshot.val();

    let quote = {
      id: snapshot.key,
      text: data.text,
      author: data.author
    };

    this.setState({quotes: [quote].concate(this.state.quotes)});
  })

}

addQuote(event){
  event.preventDefault();
  //create new quote object from input values
  let quote = {
    author: this.authorInput.current.value,
    text: this.textInput.current.value
  }

  //get deb reference, add new quote, then reset boxes
  let db = firebaseApp.database().ref('quotes');
  db.push(quote);

  this.authorInput.current.value = '';
  this.textInput.current.value = '';
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      <form onSubmit={this.addQuote.bind(this)}>
        <textarea rows="5" cols="50" ref={this.textInput}></textarea>
        <input type="text" ref={this.authorInput}></input>
        <input type="submit"/>
      </form>
      <main>

      </main>
      </div>
    );
  }
}

export default App;
