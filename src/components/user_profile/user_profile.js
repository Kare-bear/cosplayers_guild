import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



class UserProfile extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: "",
            name: "",
            age: "",
            gender: "",
            bio: "",
            locale: "",
            avatar: "",
            submitUser: false
        };

        this.handleUsernameInput = this.handleUsernameInput.bind(this);
        this.handleNameInput = this.handleNameInput.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handleGender = this.handleGender.bind(this);
        this.handleBio = this.handleBio.bind(this);
        this.handleLocale = this.handleLocale.bind(this);
        this.handleAvatar = this.handleAvatar.bind(this);
        this.handleSubmitUser = this.handleSubmitUser.bind(this);
    }

componentDidMount(){
}

handleUsernameInput(e){
    this.setState({username: e.target.value})
}

handleNameInput(e){
    this.setState({name: e.target.value})
}

handleAge(e){
    this.setState({age: e.target.value})
}

handleGender(e){
    this.setState({gender: e.target.value})
}

handleBio(e){
    this.setState({bio: e.target.value})
}

handleLocale(e){
    this.setState({locale: e.target.value})
}

handleAvatar(e){
    this.setState({avatar: e.target.value})
}

handleSubmitUser(e){
    this.setState({submitUser: true})
    const {username, name, age, bio, image_url, gender, locale } = this.state
            axios
            .post('/api/name', { username, name, age, bio, image_url, gender, locale })
            .then(response => response.data)
            .catch(console.log)
}








    render(){
      return(
        <div className="Main-User">
            <h1>You are a User</h1>
            <div>Fill in the required information</div>
            
            
            <div className="U-userName">
            <h2>Username</h2>
            <input value={this.state.username} onChange = {this.handleUsernameInput} />
            </div>
           
            <div className="U-name">
            <h2>Name</h2>
            <input value={this.state.name} onChange={this.handleNameInput}/>
            </div>

            <div className="U-age">
            <h2>Age</h2>
            <input value={this.state.age} onChange = {this.handleAge}/>
            </div>

             <div className="U-gender">
             <h2>Gender</h2>
             <input value={this.state.gender} onChange = {this.handleGender}/>
             </div>

             <div className="U-bio">
             <h2>Bio</h2>
             <input value={this.state.bio} onChange = {this.handleBio}/>
             </div>

             <div className="U-location">
             <h2>Location</h2>
             <input value={this.state.locale} onChange = {this.handleLocale} />
             </div>
            
             <div className="U-avatar">
             <h2>Upload Avatar</h2>
             <input value={this.state.avatar} onChange = {this.handleAvatar} />
             </div>

             
            <Link to="/ActiveUser">
            <button onClick={this.handleSubmitUser}>Submit</button>
            </Link>
         
         
        </div>
      );
   }
}



export default UserProfile;