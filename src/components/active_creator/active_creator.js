import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './active_creator.css';

import Avatar from 'material-ui/Avatar';
import UploadPreview from 'material-ui-upload/UploadPreview';
import ListItem from 'material-ui/List/ListItem'; 
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const style = {margin: 5};


class ActiveCreator extends Component {
      constructor() {
        super();
        this.state = {
            Image_url:"",
            username: "",
            name: "",
            age: null,
            gender: "",
            bio: "",
            locale: "",
            pictures: {}
        };

        this.handleImage_urlActive = this.handleImage_urlActive.bind(this);
        this.handleUsername_Active = this.handleUsername_Active.bind(this);
        this.handleName_Active = this.handleName_Active.bind(this);
        this.handleAge_Active = this.handleAge_Active.bind(this);
        this.handleGender_Active = this.handleGender_Active.bind(this);
        this.handleBio_Active = this.handleBio_Active.bind(this);
        this.handleLocale_Active = this.handleLocale_Active.bind(this);
        this.handlePictures_Active = this.handlePictures_Active.bind(this);
}

componentDidMount(){
    //axios.get
    axios
    .get("/api/profile")
    .then(response => this.setState({age:response.data[0].age, image_url:response.data[0].image_url, username: response.data[0].username, name: response.data[0].name, gender:response.data[0].gender, bio:response.data[0].bio, locale: response.data[0].locale, pictures: response.data[0].pictures}))
    .catch(console.log)
}

handleImage_urlActive(e){
    this.setState({Image_url: e.target.value})
}

handleUsername_Active(e){
    this.setState({username: e.target.value})
}

handleName_Active(e){
    this.setState({name: e.target.value})
}

handleAge_Active(e){
    this.setState({age: e.target.value})
}

handleGender_Active(e){
    this.setState({gender: e.target.value})
}

handleBio_Active(e){
    this.setState({bio: e.target.value})
}

handleLocale_Active(e){
    this.setState({locle: e.target.value})
}

handlePictures_Active(e){
    this.setState({pictures: e.target.value})
}


onChange = (pictures) => this.setState({pictures});

    render() {
        console.log(this.props.users)
        return (
            <div className="main-creator">
                <div>
                <div>Creator</div>
                <div className="creator-avatar">                
                   <h4>Profile Picture:</h4>
                   <ListItem
                      disabled={true}
                      leftAvatar={
                        <Avatar
                          src={''}
                          size={200}
                          style={style}
                        />
                      }
                    /> 
                </div> 
            {/* remove material ui text fields first!!!! */}
                <div className="creator-info">
                    <Paper zDepth={2} className="paper">
                    <TextField defaultValue={this.state.username} style={style} underlineShow={false} />
                    <h1 style={{fontSize: 100}}>{this.state.username}</h1>
                    <Divider />
                    <TextField defaultValue="" style={style} underlineShow={false} />
                    <Divider />
                    <TextField defaultValue="" style={style} underlineShow={false} />
                    <Divider />
                    <TextField defaultValue="" style={style} underlineShow={false} />
                    <Divider />
                    <TextField defaultValue="" style={style} underlineShow={false} />
                    <Divider />
                    <TextField defaultValue="" style={style} underlineShow={false} />
                    <Divider />
                    </Paper>
                </div>
                <div>
                    <UploadPreview className="user-images"
                        title="Picture"
                        label="Add"
                        initialItems={this.state.pictures}
                        onChange={this.onChange}
                        
                      />
                    </div>
                                        
                </div>
                
            </div>
        );
    }
}


export default ActiveCreator;



