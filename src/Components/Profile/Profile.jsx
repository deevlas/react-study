import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";


const Profile = (props) => {

    // if (!props.isAuth) return <Redirect to={"/login"} />


    return (
        <div className={s.content}>
            <ProfileInfo userProfile={props.userProfile} status={props.status} updateStatus={props.updateUserStatus}/>
            <MyPostsContainer />
        </div>

)
}

export default Profile;
