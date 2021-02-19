import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logOutTC} from "../../Redux/auth-reducer";



class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
    // authUserId: state.auth.id
})

let mapDispatchObject= {
    logOut: logOutTC
}


export default connect(mapStateToProps, mapDispatchObject) (HeaderContainer);
