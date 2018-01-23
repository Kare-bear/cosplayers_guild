import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import './active_creator.css';

import { retrieveUser, updateUser } from "../../reducers/user";

import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import UploadPreview from 'material-ui-upload/UploadPreview';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem'; 
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const style = {margin: 5};


class ActiveCreator extends Component {
      constructor() {
        super();
        this.state = {
            pictures: {},
            username: "",
            name: "",
            age: null,
            gender: "",
            bio: "",
            location: ""
        };
}



onChange = (pictures) => this.setState({pictures});

    render() {
        console.log(this.props.users)
        return (
            <div className="main-creator">
                <div>
                <div className="creator-avatar">
                   <h4>Profile Picture:</h4>
                   <ListItem
                      disabled={true}
                      leftAvatar={
                        <Avatar
                          src={'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-1/p160x160/26993226_10208694059148973_5941558674841063159_n.jpg?oh=d323a46f0bd969004e02d4796707c9ef&oe=5ADEDC25'}
                          size={200}
                          style={style}
                        />
                      }
                    /> 
                </div> 
                <div className="creator-info">
                    <Paper zDepth={2} className="paper">
                    <TextField defaultValue="Kare-Bear" style={style} underlineShow={false} />
                    <Divider />
                    <TextField defaultValue="Kara Rainey" style={style} underlineShow={false} />
                    <Divider />
                    <TextField defaultValue="35" style={style} underlineShow={false} />
                    <Divider />
                    <TextField defaultValue="Female" style={style} underlineShow={false} />
                    <Divider />
                    <TextField defaultValue="This is my amazing bio! Wow!!!" style={style} underlineShow={false} />
                    <Divider />
                    <TextField defaultValue="Dallas, Tx" style={style} underlineShow={false} />
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

const mapStateToProps = state => state;
export default connect(mapStateToProps)(ActiveCreator);



