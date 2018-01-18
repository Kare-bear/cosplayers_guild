import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// import "./ProfileCreator.css";
import { retrieveUser, updateUser } from "../../reducers/user";

class CreatorProfile extends Component {
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
//, this.props.user.authid >>>add back into handleSubmit
    render(){
      return(
        <div>
            <h1>You are a creator</h1>
            <div>Fill in the required information</div>
            
            
            <div>UserName</div>
            <input type = "text" onChange = {e => this.handleChange(e.target.value)} />
           
            <div>Name</div>
            <input type = "text" onChange = {e => this.handleChange(e.target.value)}/>

            <div>Age</div>
            <input type = "text" onChange = {e => this.handleChange(e.target.value)}/>

            <div>Gender</div>
            <input type = "text" onChange = {e => this.handleChange(e.target.value)}/>

            <div>Bio</div>
            <input type = "text" onChange = {e => this.handleChange(e.target.value)}/>
            
            <div>Upload Profile Picture</div>

            <div>Location</div>
            <input type = "text" /><br/>
            <Link to = "/active_creator">
            <button>Submit</button>
            </Link>
         {/* onClick = {this.handleSubmit} add back to submit button */}
        </div>
      );
   }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { retrieveUser, updateUser})( CreatorProfile );