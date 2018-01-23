import React, { Component } from "react";
import contactImg from "./HiKgroup.jpg";
import "./contact.css";

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
        <div className="Contact">
            <h1 className="Contact-title">CONTACT US</h1>
            <h3 className="Contact-intro">If you have any questions about this site or need to reach the leaders of the COSPLAYER'S GUILD please send an e-mail or contact us on Facebook.</h3>
            <h4 className="Contact-email">EMAIL: kara_rainey@outlook.com</h4>
            <h4 className="Contact-facebook">FACEBOOK: www.facebook.com/kara.rainey.90</h4>

            <a>
                    <img src={contactImg} className="contactImg" alt="contact" />
            </a>
        </div>
      );
   }
}