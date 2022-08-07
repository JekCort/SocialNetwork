import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {dialogsPropsType, messagesPropsType, postsPropsType} from "./index";


const App = (props:dialogsPropsType & messagesPropsType & postsPropsType) => {

    const HandlerDialogs = () => <Dialogs dialogs={props.dialogs} messages={props.messages}/>
    const HandlerProfile = () => <Profile posts={props.posts}/>
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
}

export default App;
