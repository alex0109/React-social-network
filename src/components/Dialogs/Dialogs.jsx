import React from 'react';
import './Dialogs.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router';

const Dialogs = (props) => {

	let state = props.dialogsPage;

	let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id}/>);
	let messagesElements = state.messages.map( d => <Message message={d.message} key={d.id}/>);
	let newMessageText = state.newMessageText;

	let newMessageElement = React.createRef();

	const onMessageChange = (e) => {
		let newMessage = e.target.value;
		props.updateNewMessageText(newMessage);
	};

	const onSendMessageClick = () => {
		props.sendMessage();
	};

	if(!props.isAuth) return <Redirect to={"/login"} />

    return (
        <div className="dialogs">
            <div className="dialogs__contacts">
            	<div className="dialogs__title">Dialogs</div>
            	{dialogsElements}
            </div>
            <div className="dialogs__field">
            	<div className="dialogs__messages">
            		{messagesElements}
            	</div>
            	<div className="dialogs__area">
            		<textarea cols="50" rows="3" placeholder="Type something here..." ref={newMessageElement} value={newMessageText} onChange={onMessageChange}></textarea>
            		<div className="dialogs__btn">
            			<button className="appBtn" onClick={onSendMessageClick}>Send</button>
            		</div>
            	</div>
            </div>
        </div>
    );
}

export default Dialogs;