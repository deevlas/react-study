import React from 'react';
import s from './../Navbar.module.css'

const FriendsNav = (props) => {


    return (
        <div className={s.friendsBlock}>
            <div >
                <img className={s.friendsImg} src="https://avatarko.ru/img/kartinka/1/LOST_Ben.jpg" alt=""/>
                {props.name}
            </div>
        </div>

    )
}

export default FriendsNav;
