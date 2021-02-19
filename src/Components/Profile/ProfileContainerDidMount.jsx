import React from 'react';
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../Redux/profile-reducer";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)

    }

    render() {

        return (
            <Profile {...this.props} />
        )
    }
}

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
