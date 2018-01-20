import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./choose.css";
import {connect} from 'react-redux';

import { retrieveUser, userExists } from "../../reducers/user";


class Choose extends Component {
    constructor(props){
        super(props);

        this.state = {
            
        };
    }

componentDidMount(){
    console.log(process.env);
    this.props.retrieveUser();
    this.props.userExists();
}

    render(){
      return(
        <div className="Main-Choose">
            <h1>CHOOSE YOUR CLASS</h1>

            <div>Are you the creative type or do you prefer to purchase your look?</div>
            <hr/>

                <div>
                As a Creator, you prefer to bring your ideas to life. Whether its sewing costumes, shaping armor parts, designing unique cosplay pieces or any other creative expression this is the place for you.
                </div>
                <div>Creators have a few extra options, such as...</div>
                <ul>
                    <li>Upload pictures of your work</li>
                    <li>Set prices for your comissions</li>
                    <li>Sell your creations to other users</li>
                </ul>

                <Link to="/CreatorProfile">
                <button className = "Choose-Creator">CREATOR</button>
                </Link>

                <hr/>
                <div>
                As a User, you aren't interested in making your own designs but instead prefer buying your look piece by piece. Whether you prefer simple looks or more detail oriented designs, you know what you want. 
                </div>
                <div>As a User you have access to all the main features of [unnamed site], minus the Creator extra features.</div>

                <Link to="/UserProfile">
                <button className = "Choose-User">USER</button>
                </Link>
        </div>
      );
   }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps,{retrieveUser, userExists})(Choose);