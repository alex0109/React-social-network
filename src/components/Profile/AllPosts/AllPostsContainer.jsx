import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import AllPosts from './AllPosts';

let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText 

	};
}

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewPostText: (text) => {
			dispatch(updateNewPostTextActionCreator(text));
		},

		addPostActionCreator: () => {
			dispatch(addPostActionCreator());
		}
	};
}

const AllPostsContainer = connect(mapStateToProps, mapDispatchToProps)(AllPosts);

export default AllPostsContainer;