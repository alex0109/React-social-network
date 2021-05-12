import { connect } from 'react-redux';
import './../Navigation.scss';
import Sidebar from './Sidebar';

let mapPropsToProps = (state) => {
    return {
        bestFriend: state.sideBar.bestFriend
    };
}

let mapDispatchToProps = (dispatch) => {
    return {

    };
}

const SidebarContainer = connect(mapPropsToProps, mapDispatchToProps)(Sidebar)

export default SidebarContainer;