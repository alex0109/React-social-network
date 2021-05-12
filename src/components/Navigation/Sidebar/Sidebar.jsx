import './../Navigation.scss';
import BestFriend from './BestFriend/BestFriend';

const Sidebar = (props) => {

    let bfElements = props.bestFriend.map( bf => <BestFriend name={bf.name} key={bf.id}/>);

    return (
        <div className="navigation__bFriends">
            <div className="navigation__bfTitle">Best Friends</div>
            <div className="navigation__bfRow">
                { bfElements }
            </div>
        </div>
    );
}

export default Sidebar;