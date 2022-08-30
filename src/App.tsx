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

type AppPropsType = {
    state:statePropsType
    store: Store<EmptyObject & {profilepage: profilePagePropsType, dialogspage: dialogsPagePropsType}, ActionsType>
    dispatch:(action: ActionsType)=>void
}
const App = (props: AppPropsType) => {
    const HandlerDialogs = () => <Dialogs store={props.store}/>
    const HandlerProfile = () => <Profile store={props.store}/>
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path="/DialogsItem" render={HandlerDialogs}/>
                <Route path="/Profile" render={HandlerProfile}/>
                <Route path="/News" component={News}/>
                <Route path="/Music" component={Music}/>
                <Route path="/Settings" component={Settings}/>
            </div>
        </div>

    );
}

export default App;
