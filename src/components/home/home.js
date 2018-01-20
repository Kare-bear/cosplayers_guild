import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import coverImg from './heroes_cover.jpg';
import "./home.css";


class Home extends Component {
    
    render(){
      return(
        <div className = "Home">
            <div>
                <div className = "Home-title">
                    <h1>PlaceHolder Home Page</h1>
                </div>

                <div className = "Home-buttons">
                <a href = { process.env.REACT_APP_LOGIN}>
                        <button className = "Button-Choose">Create Account</button>
                    </a>
                    <a href = { process.env.REACT_APP_LOGIN}>
                        <button className = "Button-Login">Login</button>
                    </a>
                    <hr/>
                    <Link to="/choose">
                <button className = "temp">TEST PROFILES</button>
                </Link>
                </div>

                <a>
                <img src={coverImg} className="CoverImg" alt="cover" />
                </a>
            </div>
        </div>            
      );   
   }
}


const mapStateToProps = state => state;

export default connect(mapStateToProps)( Home );