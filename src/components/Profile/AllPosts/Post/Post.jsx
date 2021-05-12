import styles from './../../Profile.module.scss';

const Post = (props) => {
    return (
        <div className={styles.profInfo__userPost}>
			<div className={`${styles.profInfo__avatar} ${styles.mini}`}>
				<img src="https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png" alt=""></img>
			</div>
			<h5 className={styles.name}>User Name</h5>
			<p className={styles.text}>{props.message}</p>
		</div>
    );
}

export default Post;