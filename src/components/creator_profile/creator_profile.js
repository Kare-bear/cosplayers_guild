import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./creator_profile.css";

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

    render(){
      return(
        <div className="Main-Creator">
            <h1>You are a creator</h1>
            <div>Fill in the required information</div>
            
            
            {/* <div>UserName</div>
            <input type = "text" onChange = {e => this.handleChange(e.target.value)} />
            */}
            <div>Name</div>
            <input type="text" onChange={e => this.handleChange(e.target.value)}/>

            {/* <div>Age</div>
            <input type = "text" onChange = {e => this.handleChange(e.target.value)}/>

            <div>Gender</div>
            <input type = "text" onChange = {e => this.handleChange(e.target.value)}/>

            <div>Bio</div>
            <input type = "text" onChange = {e => this.handleChange(e.target.value)}/>
            
            <div>Upload Profile Picture</div>

            <div>Location</div>
            <input type = "text" /><br/> */}
            <Link to="/ActiveCreator">
            <button onClick={this.handleSubmit}>Submit</button>
            </Link>
         
        </div>
      );
   }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { retrieveUser, updateUser})( CreatorProfile );