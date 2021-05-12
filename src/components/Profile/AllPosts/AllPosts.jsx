import React from 'react';
import Post from './Post/Post';
import styles from './../Profile.module.scss';

const AllPosts = (props) => {
	let postsElements = props.posts.map( p => <Post message={p.message} key={p.id}/>);

	let onAddPost = () => {
		props.addPostActionCreator();
	};

	let newPostElement = React.createRef();

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}

	return (
		<div className={styles.profInfo__posts}>
			<div className={styles.profInfo__addPost}>
				<h4>Add Post</h4>
				<textarea placeholder="Type something here..." cols="30" rows="10" ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
				<button className={styles.appBtn} onClick={onAddPost}>Post</button>
			</div>
			{ postsElements}
		</div>
	);
}

export default AllPosts;