import React, { Component } from 'react';
import './App.css';
import UserList from './user-list.js';
import SearchBar from './search-bar.js';
import Toolbar from './tool-bar.js';

class App extends Component{
  render(){
    return(
      <div>
        <div className="container">
          <SearchBar/>
          <Toolbar/>
          <UserList/>
        </div>
      </div>
    )
  }
}

export default App;
