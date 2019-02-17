import React, { Component } from 'react';
import AddItem from './components/AddItem';
import MyList from './components/MyList';
import './App.css';

class App extends Component {
  state = {
    records: {}
  };
  addRecord = record => {
  //1 take copy of existing state
  const records = {...this.state.fishes};
  //2 add new record
  records[`record${Date.now()}`] = record;
  this.setState({records});
  };
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Beer & Wine Tasting Note App</h1>
          <h4>A handy app to take notes on beers and wines you've tried</h4>
        </header>
        <div className="container">
          <AddItem addItem={this.addItem} />
          <ul>
          <MyList />
          </ul>
         
        </div>
        
      </div>
    );
  }
}

export default App;
