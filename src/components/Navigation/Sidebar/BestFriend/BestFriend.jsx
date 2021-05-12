import './../../Navigation.scss';

const BestFriend = (props) => {

    return (
        <div className="navigation__bfBlock">
            <div className="navigation__bfImage">
                <img src="https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png" alt="" />
            </div>
            <div className="navigation__bfName">{ props.name }</div>
        </div>
    );
}

export default BestFriend;