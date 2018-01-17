import React, { Component } from "react";


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
        <div>
            <h1>this is the about page</h1>
            <div>
                This site has been designed to allow Creators and Users to interact with one another in a single location. If you are a User and you are looking for that one piece to complete your look or have an idea for the prefect amalgam Cosplay, this is the place to find the Creator you need to make your Cosplay pop. If you are the creative type and prefer to build/make whatever your imagination comes up with or you just enjoy working on commisions for your fellow members this is the perfect place for you. Welcome to the best place for Cosplayers, welcome to [site unnamed]!
            </div>
        </div>
      );
   }
}