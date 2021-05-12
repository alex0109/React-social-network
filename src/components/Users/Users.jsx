import React from "react";
import styles from "./Users.module.scss";
import uPhoto from "./../../assets/cat.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.users}>
      <div className={styles.users__header}>
        <div className={styles.users__title}>Users</div>
        <div className={styles.users__pagination}>
          {pages.map((p) => {
            return (
              <span
                className={
                  props.currentPage === p &&
                  `${styles.users__page} ${styles.selected}`
                }
                onClick={() => {
                  props.onPageChange(p);
                }}>
              </span>
            );
          })}
        </div>
      </div>
      <div className={styles.users__list}>
        {props.users.map((u) => (
          <div className={styles.userBlock} key={u.id}>
            <div className={styles.userBlock__imgPlusFollow}>
              <div className={styles.userBlock__img}>
                <NavLink to={"/profile/" + u.id}>
                  <img
                    src={u.photos.small != null ? u.photos.small : uPhoto}
                    alt=""
                  />
                </NavLink>
              </div>
              {u.followed ? (
                <button
                  className={`${styles.userBlock__btn} ${styles.unfollowed}`}
                  disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => { props.unFollow(u.id) }}>UnFollow</button>
              ) : (
                <button
                  className={`${styles.userBlock__btn} ${styles.followed}`}
                  disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => { props.follow(u.id) }} >Follow</button>
              )}
            </div>
            <div className={styles.userBlock__userInfo}>
              <div className={styles.userBlock__name}>
                Name: <span>{u.name}</span>
              </div>
              <div className={styles.userBlock__status}>
                Status: <span>{u.status}</span>
              </div>
              <div className={styles.userBlock__country}>
                Country: <span>{"u.location.country"}</span>
              </div>
              <div className={styles.userBlock__city}>
                City: <span>{"u.location.city"}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.loadMore}>
        <hr />
        {/* <button onClick={this.getUsers}>Get Users</button> */}
      </div>
    </div>
  );
};

export default Users;
