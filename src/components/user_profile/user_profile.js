import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { retrieveUser, updateUser } from "../../reducers/user";

class UserProfile extends Component {
    constructor(props){
        super(props);

        this.state = {
            textInput: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

componentDidMount(){
    this.props.retrieveUser;
}

handleChange(val){
    this.setState({ textInput: val })
}

handleSubmit(){
    
    this.props.updateUser(this.state.textInput);
}

    render(){
      return(
        <div className="Main-Creator">
            <h1>You are a User</h1>
            <div>Fill in the required information</div>

            <Link to="/active_user">
            <button onClick={this.handleSubmit}>Submit</button>
            </Link>
         
        </div>
      );
   }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { retrieveUser, updateUser})( UserProfile );