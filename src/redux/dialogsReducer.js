const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Ilya' },
        { id: 2, name: 'Kosyak' },
        { id: 3, name: 'Olezha' },
        { id: 4, name: 'Liza' },
        { id: 5, name: 'Nadya' },
        { id: 6, name: 'Slava' }
    ],
    messages: [
        { id: 1, message: 'Hello' }
    ],
    newMessageText: 'Send me PLS'
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {

            let newMessage = state.newMessageText;

            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, { id: 2, message: newMessage }]
            }

        }

        case UPDATE_NEW_MESSAGE: {

            return {
                ...state,
                newMessageText: action.newMessage
            }

        }

        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
});

export const updateNewMessageTextActionCreator = (newMessage) => ({
    type: UPDATE_NEW_MESSAGE,
    newMessage: newMessage
});

export default dialogsReducer;