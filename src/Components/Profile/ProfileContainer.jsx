import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../Redux/profile-reducer";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const ProfileContainer = (props) => {
    let userId = props.match.params.userId;
    useEffect(() => {
        props.getUserProfile(userId)
        props.getUserStatus(userId)
        }, [userId]
    )

    return (
        <Profile {...props} />
    )
}

    // componentDidMount() {
    //     let userId = this.props.match.params.userId
    //     this.props.getUserProfile(userId)
    //     this.props.getUserStatus(userId)
    // }



let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status
    }
}

let mapDispatchObject = {
    getUserProfile,
    getUserStatus,
    updateUserStatus
}

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, mapDispatchObject)
)(ProfileContainer);
