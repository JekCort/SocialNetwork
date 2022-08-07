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


// type dialogPropsType = {
//     id: number,
//     name: string
// }
//
// type dialogsPropsType = {
//     dialogs: Array<dialogPropsType>
// }
//
// type messagePropsType = {
//     id: number,
//     name: string
// }
//
// type messagesPropsType = {
//     messages: Array<messagePropsType>
// }
//
// const dialogs = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Eva"},
//     {id: 3, name: "Sveta"},
//     {id: 4, name: "Viktor"},
//     {id: 5, name: "Valera"}
// ]
// const messages = [
//     {id: 1, message: "Hi"},
//     {id: 2, message: "How are a you"},
//     {id: 3, message: "Yo"},
//     {id: 4, message: "Yo"},
//     {id: 5, message: "Yo"}
// ]


const HandlerDialogs = () => <Dialogs/>
const HandlerProfile = () => <Profile/>


const App = () => {
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
