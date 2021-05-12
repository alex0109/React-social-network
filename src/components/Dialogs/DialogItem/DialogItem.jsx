import { NavLink } from 'react-router-dom';
import './../Dialogs.scss';

const DialogItem = (props) => {
	let path = "/dialogs/" + props.id;

	return (
		<div className="dialogs__name"><NavLink to={path}>{props.name}</NavLink></div>
	);
}

export default DialogItem;