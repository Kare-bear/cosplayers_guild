import React, { Component } from "react";
// import { Link } from "react-router-dom";
import {connect} from 'react-redux';



class ActiveUser extends Component {


    render() {        
        return (
            <div className="main-user">
                <div>
                    <h1>test page</h1>
                </div>    
            </div>
        );
    }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(ActiveUser);