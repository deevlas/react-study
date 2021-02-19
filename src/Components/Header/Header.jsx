import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";



const Header = (props) => {

    return (

        <header className={s.header}>
            <img src="https://image.freepik.com/free-vector/colorful-woman-logo_93835-328.jpg" alt=""/>

            <div className={s.loginBlock}>
                {props.isAuth
                    ?
                    <div>
                        <div>{props.login} <br/> {props.email}</div>
                        <button onClick={props.logOut}>Log Out</button>
                    </div>
                    :
                    <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}

export default Header;
