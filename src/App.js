import React, { Component } from 'react'; 
import { Link } from "react-router-dom";
import routes from "./routes";



// import logo from './logo.svg';
import './App.css';


class App extends Component {

  render() {

    
    return (
      <div className="App">
      
        <header className="App-header" >
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Link to = "/" style={{ textDecoration: 'none', color:'red'}}>
          <h1 className="App-title">The Cosplayers Guild</h1>
          </Link>
          <div className = "App-bar">

          <Link to = "/" style={{ textDecoration: 'none', color:'red' }}>
          <h3>HOME</h3>
          </Link>
         
          <Link to = "/About" style={{ textDecoration: 'none', color:'red' }}>
          <h3>ABOUT</h3>
          </Link>
          <Link to = "/Contact" style={{ textDecoration: 'none', color:'red' }}>
          <h3>CONTACT US</h3>
          </Link>
          </div>
        </header>
     
      {routes}
      
      </div>
    );
  }
}

export default App;
