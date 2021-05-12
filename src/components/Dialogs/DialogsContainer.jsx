import { updateNewMessageTextActionCreator, sendMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
		isAuth: state.auth.isAuth
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageText: (newMessage) => {
			dispatch(updateNewMessageTextActionCreator(newMessage));
		},
		sendMessage: () => {
			dispatch(sendMessageActionCreator());
		}
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs);;