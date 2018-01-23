import React, { Component } from "react";
import backImg from "./heroes_cover.jpg";
import "./about.css"

export default class About extends Component {
    constructor(props){
        super(props);

        this.state = {
            
        };
    }

componentDidMount(){
    console.log(process.env);
}

    render(){
      return(
          <div className="About">
            <div className="About-lead">
                <h1 className="About-title">ABOUT THE COSPLAYER'S GUILD</h1>
                <h3 className="About-intro">
                    This site has been designed to allow Creators and Users to interact with one another in a single location. If you are a User and you are looking for that one piece to complete your look or have an idea for the prefect amalgam Cosplay, this is the place to find the Creator you need to make your Cosplay pop. If you are the creative type and prefer to build/make whatever your imagination comes up with or you just enjoy working on commisions for your fellow members this is the perfect place for you. Welcome to the best place for Cosplayers, 
                </h3>
                <h2 className="About-welcome">Welcome to the COSPLAYER'S GUILD!</h2>
                <div>
                <a>
                    <img src={backImg} className="backImg" alt="background" />
                </a>
                </div>
            </div>
        </div>
      );
   }
}