import './App.css';
import React, {useEffect} from "react";
import {withRouter, Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import Friends from "./Components/Friends/Friends";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import NavbarContainer from "./Components/Navbar/NavbarCotainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./Components/Common/Preloader/Preloader";
import {setInitialTC} from "./Redux/app-reducer";


const App = (props) => {

    useEffect(() => {
        props.setInitialTC();
    }, [props.initial])

    if (!props.initial)
    return (
        <Preloader/>
    )
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <NavbarContainer/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}/>
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer/>}/>
                <Route path='/users'
                       render={() => <UsersContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/friends' render={() => <Friends/>}/>
                <Route path='/login' render={() => <Login/>}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        initial: state.app.initial
    }
}

export default  compose(
    withRouter,
    connect(mapStateToProps, {setInitialTC}))(App);
