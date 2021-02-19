import React from 'react';
import LoginReduxForm from "./LoginReduxForm";
import {logInTC} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


let Login = (props) => {

    const dataSubmit = (dataForm) => {
        props.logIn(dataForm.login, dataForm.password, dataForm.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={`/profile/${props.userId}`}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={dataSubmit}/>
        </div>
    )
}


const mapDispatchObject = {
    logIn: logInTC
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.id
    }
}


export default connect(mapStateToProps, mapDispatchObject)(Login);
