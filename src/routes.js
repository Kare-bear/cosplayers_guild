import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Choose from "./components/choose/choose";
import CreatorProfile from "./components/creator_profile/creator_profile";
import UserProfile from "./components/user_profile/user_profile";
import ActiveCreator from "./components/active_creator/active_creator";
import ActiveUser from "./components/active_user/active_user";


export default(
    <Switch>
        <Route exact path = "/" component = { Home } />
        <Route path = "/choose" component = { Choose } />
        <Route path = "/creatorProfile" component = { CreatorProfile } />
        <Route path = "/userProfile" component = { UserProfile } />
        <Route path = "/about" component = { About } />
        <Route path = "/contact" component = { Contact } />
        <Route path = "/ActiveCreator" component = { ActiveCreator } />
        <Route path = "/ActiveUser" component = { ActiveUser } />
        
    </Switch>
);