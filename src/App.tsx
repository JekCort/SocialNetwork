import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionsType, dialogsPagePropsType, profilePagePropsType, statePropsType, storePropsType} from "./redax/store";
import {EmptyObject, Store} from "redux";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Users} from "./components/Users/Users";
import {UsersContainer} from "./components/Users/UsersContainer";

type AppPropsType = {
    store: Store<EmptyObject & {profilePage: profilePagePropsType, dialogsPage: dialogsPagePropsType}, ActionsType>

}
const App = () => {
    // const HandlerDialogs = () => <DialogsContainer store={props.store}/>
    // const HandlerProfile = () => <Profile store={props.store}/>
    const HandlerDialogs = () => <DialogsContainer/>
    const HandlerProfile = () => <Profile/>
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path="/DialogsItem" render={HandlerDialogs}/>
                <Route path="/Profile" render={HandlerProfile}/>
                <Route path="/Users" render={()=><UsersContainer/>}/>
                <Route path="/News" component={News}/>
                <Route path="/Music" component={Music}/>
                <Route path="/Settings" component={Settings}/>
            </div>
        </div>

    );
}

export default App;
