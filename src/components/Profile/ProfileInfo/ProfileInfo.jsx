import React from "react";
import Preloader from "../../common/Preloader";
import styles from "./../Profile.module.scss";
import uPhoto from "./../../../assets/cat.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={styles.profInfo}>
      <div className={styles.profInfo__banner}>
        <img src="https://www.ovesteel.com/images/d6.jpg" alt=""></img>
      </div>
      <div className={styles.profInfo__aboutUser}>
        <div className={styles.profInfo__avatar}>
          <img
            src={
              !props.profile.photos.large ? uPhoto : props.profile.photos.large
            }
            alt=""
          />
        </div>
        <div className={styles.profInfo__info}>
          <ul className={styles.profInfo__list}>
            <li className={`${styles.profInfo__item} ${styles.name}`}>
              Name: <p>{props.profile.fullName}</p>
            </li>
            <li className={`${styles.profInfo__item} ${styles.status}`}>
              Status:&nbsp;
              <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
            </li>
            <li className={styles.profInfo__item}>
              ID:<p>{props.profile.userId}</p>
            </li>
            <li className={styles.profInfo__item}>
              In search of a job:
              {props.profile.lookingForAJob ? <p>Yes</p> : <p>No</p>}
            </li>
            <li className={styles.profInfo__item}>
              Education:<p>High</p>
            </li>
            <li className={styles.profInfo__item}>
              City:<p>Kharkov</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
