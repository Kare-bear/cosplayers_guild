import React, {Component} from 'react';
import {connect} from 'react-redux';



class UserDetail extends Component {
    render() {
        if (!this.props.user) {
            return (<div>Select a user...</div>);
        }
        return (
            <div>
                <img src={this.props.user.image_url} />
                <h1>{this.props.user.username}</h1>
                <h2>{this.props.user.name}</h2>
                <h3>Age: {this.props.user.age}</h3>
                <h3>Description: {this.props.user.bio}</h3>
                <h3>Gender: {this.props.user.gender}</h3>
                <h3>Location: {this.props.user.locale}</h3>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);
