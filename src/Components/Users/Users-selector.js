import {createSelector} from "reselect";

const getUsers = (state) => state.usersPage.users;

export const getUsersSel = createSelector(getUsers, users => {
   return users.filter(u => true)})

export const getTotalUsersCountSel = (state) => state.usersPage.totalUsersCount;

export const getPageUsersSizeSel = (state) => state.usersPage.pageUsersSize;

export const getCurrentPageSel = (state) => state.usersPage.currentPage;

export const getIsFetchingSel = (state) => state.usersPage.isFetching;

export const getDisabledUsersFollowSel = (state) => state.usersPage.disabledUsersFollow;

