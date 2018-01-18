import React, { Component } from 'react'; 
import { Link } from "react-router-dom";

// import UserList from './containers/user_list';
// import UserDetails from './containers/user_details';
import routes from "./routes";

import logo from './logo.svg';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to = "/">
          <h1 className="App-title">The Cosplayers Guild</h1>
          </Link>
          <div className = "App-bar">

          <Link to = "/">
          <h3>HOME</h3>
          </Link>
         
          <Link to = "/About">
          <h3>ABOUT</h3>
          </Link>
          <Link to = "/Contact">
          <h3>CONTACT US</h3>
          </Link>
          </div>
        </header>
      {/* <div>
      <div>
        <h2>User List</h2>
        <UserList />
        <hr />
        <h2>User Details</h2>
        <UserDetails />
    </div>
      </div> */}
      {routes}
      </div>
    );
  }
}

export default App;
