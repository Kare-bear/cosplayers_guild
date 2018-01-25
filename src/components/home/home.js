import React, { Component } from "react";
import coverImg from './heroes_standing.jpg';


import "./home.css";


class Home extends Component {
    
    render(){
      return(
        <div className = "Home">
            <div>
                <div className="Home-lead">
                    <h1 className="Home-title">THIS IS THE COSPLAYER'S GUILD</h1>
                    <h3 className="Home-intro">A place for all who call themselves a COSPLAYER, whether you make everything yourself or you spend days looking for the right piece to purchase to finish your look, you are welcome here. Enter below, and welcome to the COSPLAYER'S GUILD!</h3>
                </div>

                <div className = "Home-buttons">
                    <a href = { process.env.REACT_APP_LOGIN}>
                        <button className = "Button-Choose">Create Account</button>
                    </a>
                    <a href = { process.env.REACT_APP_LOGIN}>
                        <button className = "Button-Login">Login</button>
                    </a>                   
                </div>

                    <a>
                    <img src={coverImg} className="CoverImg" alt="cover" />
                    </a>
            </div>
        </div>            
      );   
   }
}




export default Home;