import React, { Component } from "react";

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
        <div>
            <h1>this is the contact page</h1>
        </div>
      );
   }
}