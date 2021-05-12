import { NavLink } from 'react-router-dom';
import './Navigation.scss';
import SidebarContainer from './Sidebar/SidebarContainer';

const Navigation = (props) => {
    return (
        <div className="navigation">
        	<ul className="navigation__list">
        		<li className="navigation__item"><NavLink to="/profile">Profile</NavLink></li>
        		<li className="navigation__item"><NavLink to="/dialogs">Messages</NavLink></li>
        		<li className="navigation__item"><NavLink to="/music">Music</NavLink></li>
        		<li className="navigation__item"><NavLink to="/news">News</NavLink></li>
				<li className="navigation__item"><NavLink to="/users">Users</NavLink></li>
        		<li className="navigation__item"><NavLink to="/settings">Settings</NavLink></li>
        	</ul>
            <SidebarContainer/>
        </div>
    );
}

export default Navigation;