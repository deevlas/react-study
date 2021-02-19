import React from 'react'
import {connect} from "react-redux";
import {
    follow, getUsers,
    unfollow
} from "../../Redux/users-reducer";
import Users from "./Users";
import Pagination from "../Common/Pagination/Pagination";
import Preloader from "../Common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux"
import {
    getCurrentPageSel, getDisabledUsersFollowSel,
    getIsFetchingSel,
    getPageUsersSizeSel,
    getTotalUsersCountSel,
    getUsersSel
} from "./Users-selector";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.pageUsersSize, this.props.currentPage)
    }

    currentPageChanged = (pageNumber) => {
        this.props.getUsers(this.props.pageUsersSize, pageNumber)
    }

    render() {

        return <>
            <Pagination totalCountItems={this.props.totalUsersCount}
                        pageSize={this.props.pageUsersSize}
                        currentPage={this.props.currentPage}
                        currentPageChanged={this.currentPageChanged}/>
            {this.props.isFetching ? <Preloader/> :
                <Users
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    disabledUsersFollow={this.props.disabledUsersFollow}
                />}
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSel(state),
        totalUsersCount: getTotalUsersCountSel(state),
        pageUsersSize: getPageUsersSizeSel(state),
        currentPage: getCurrentPageSel(state),
        isFetching: getIsFetchingSel(state),
        disabledUsersFollow: getDisabledUsersFollowSel(state)
    }
}

let mapDispatchObject = {
    follow,
    unfollow,
    getUsers
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchObject))
    (UsersContainer)

// withAuthRedirect(connect(mapStateToProps, mapDispatchObject)(UsersContainer));

