import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsNav from "./FriendsNav/FriendsNav";


const Navbar = (props) => {

    let friendsElement = props.friends
        .map(f => <FriendsNav id={f.id} name={f.name} key={f.id}/>)

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a href={`/Profile/${props.userId}`} activeClassName={s.activeLink}>Profile</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/Dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/News' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Users' activeClassName={s.activeLink}>Find Users</NavLink>
            </div>
            <div className={`${s.item} ${s.friendsItem}`}>
                <NavLink to='/Friends' activeClassName={s.activeLink}>Friends</NavLink>
            </div>
            <div className={s.friendsElement}>
                { friendsElement }
            </div>
        </nav>
    )
}

export default Navbar;
