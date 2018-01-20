import React, { Component } from "react";
// import { Link } from "react-router-dom";
import {connect} from 'react-redux';
// // import './active_creator.css';

// import { retrieveUser, updateUser } from "../../reducers/user";

// import Avatar from 'material-ui/Avatar';
// import FileFolder from 'material-ui/svg-icons/file/folder';
// import FontIcon from 'material-ui/FontIcon';
// import UploadPreview from 'material-ui-upload/UploadPreview';
// import List from 'material-ui/List/List';
// import ListItem from 'material-ui/List/ListItem'; 

// const style = {margin: 5};


class ActiveCreator extends Component {
//       constructor() {
//         super();
//         this.state = {
//             pictures: {},
//             username: "",
//             name: "",
//             age: null,
//             gender: "",
//             bio: "",
//             location: ""
//         };
// }



// onChange = (pictures) => this.setState({pictures});

    render() {
        console.log(this.props.users)
        return (
            <div className="main-creator">
                {/* <div>
                  <div>
                   <h4>Profile Picture:</h4>
                   <ListItem
                      disabled={true}
                      leftAvatar={
                        <Avatar
                          src={this.props.users.image_url}
                          size={200}
                          style={style}
                        />
                      }
                    >  
                  </ListItem>
                  </div>
                  <div>
                   <h4>Username:{this.props.users.username}</h4>
                  </div>
                  <div>
                   <h4>Name:{this.props.users.name}</h4>
                  </div>
                  <div>
                   <h4>Age:{this.props.users.age}</h4>
                  </div>
                  <div>
                   <h4>Gender:{this.props.users.gender}</h4>
                  </div>
                  <div>
                   <h4>Bio:{this.props.users.bio}</h4>
                  </div>
                  <div>
                   <h4>Location:{this.props.users.locale}</h4>
                  </div>             
                  <div>
                    <UploadPreview
                        title="Picture"
                        label="Add"
                        initialItems={this.state.pictures}
                        onChange={this.onChange}
                      />
                    </div>
                                        
                </div>
                 */}
            </div>
        );
    }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(ActiveCreator);



