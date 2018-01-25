import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./creator_profile.css";


class CreatorProfile extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: "Kare-Bear",
            name: "Kara Rainey",
            age: "35",
            gender: "Female",
            bio: "Stuff",
            locale: "Dallas, Tx",
            image_url: "",
            submitCreator: false
        };

        this.handleUsernameInput = this.handleUsernameInput.bind(this);
        this.handleNameInput = this.handleNameInput.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handleGender = this.handleGender.bind(this);
        this.handleBio = this.handleBio.bind(this);
        this.handleLocale = this.handleLocale.bind(this);
        this.handleimage_url = this.handleimage_url.bind(this);
        this.handleSubmitCreator = this.handleSubmitCreator.bind(this);
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

handleimage_url(e){
    this.setState({image_url: e.target.value})
}

handleSubmitCreator(e){
    this.setState({submitCreator: true})
    const {username, name, age, bio, image_url, gender, locale } = this.state
            axios
            .post('/api/name', { username, name, age, bio, image_url, gender, locale })
            .then(response => response.data)
            .catch(console.log)
}
    


    render(){
      return(
        <div className="Main-Creator">
            <h1>You are a creator</h1>
            <div>Fill in the required information</div>
            
            
            <div className="C-userName">
            <h2>Username</h2>
            <input value={this.state.username} onChange = {this.handleUsernameInput} />
            </div>
           
            <div className="C-name">
            <h2>Name</h2>
            <input value={this.state.name} onChange={this.handleNameInput}/>
            </div>

            <div className="C-age">
            <h2>Age</h2>
            <input value={this.state.age} onChange = {this.handleAge}/>
            </div>

             <div className="C-gender">
             <h2>Gender</h2>
             <input value={this.state.gender} onChange = {this.handleGender}/>
             </div>

             <div className="C-bio">
             <h2>Bio</h2>
             <input value={this.state.bio} onChange = {this.handleBio}/>
             </div>

             <div className="C-location">
             <h2>Location</h2>
             <input value={this.state.locale} onChange = {this.handleLocale} />
             </div>
            
             <div className="C-avatar">
             <h2>Upload Avatar</h2>
             <input value={this.state.avatar} onChange = {this.handleAvatar} />
             </div>

             
            <Link to="/ActiveCreator">
            <button onClick={this.handleSubmitCreator}>Submit</button>
            </Link>
         
        </div>
      );
   }
}



export default  CreatorProfile;