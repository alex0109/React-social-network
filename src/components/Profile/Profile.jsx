import AllPostsContainer from './AllPosts/AllPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import styles from './Profile.module.scss';

const Profile = (props) => {

    return (
        <div className={styles.profile}>
        	<ProfileInfo profile={props.profile}/>
        	<AllPostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;