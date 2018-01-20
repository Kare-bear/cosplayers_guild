import React, { Component } from "react";
import "./contact.css"

export default class Contact extends Component {
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
        <div className="Main-Contact">
            <h1>this is the contact page</h1>
        </div>
      );
   }
}