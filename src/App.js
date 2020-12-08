import './App.css';
import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import Friends from "./Components/Friends/Friends";


const App = (props) => {

    debugger;

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar friends={props.store.getState().sideBarPage.friendsItem}/>
                <div className='app-wrapper-content'>
                    <Route path='/Dialogs'
                           render={() => <Dialogs dialogsPage={props.store.getState().dialogsPage}
                                                  addMessage={props.store.addMessage.bind(props.store)}
                                                  updateNewMessageText={props.store.updateNewMessageText.bind(props.store)}
                                                  // store = {props.store}
                           /> }/>
                    <Route path='/Profile'
                           render={() => <Profile profilePage={props.store.getState().profilePage}
                                                  addPost={props.store.addPost.bind(props.store)}
                                                  updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                                                  // store = {props.store}
                           />
                           }/>
                    <Route path='/News' render={() => <News /> }/>
                    <Route path='/Music' render={() => <Music /> }/>
                    <Route path='/Settings' render={() => <Settings /> }/>
                    <Route path='/Friends' render={() => <Friends /> }/>
                </div>
            </div>
    );
}

export default App;
