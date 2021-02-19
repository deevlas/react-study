import {connect} from "react-redux";
import Navbar from "./Navbar";


let mapDispatchToProps = () => {
    return {

    }
}

let mapStateToProps = (state) => {
    return {
        friends: state.sideBarPage.friendsItem,
        userId: state.auth.id
    }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps) (Navbar);

export default NavbarContainer;
