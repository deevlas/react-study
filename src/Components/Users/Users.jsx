import React from 'react';
import styles from './Users.module.css'
import userAva from "../../assets/img/pngtree-user-vector-avatar-png-image_1541962.jpg"
import {NavLink} from "react-router-dom";


let Users = (props) => {

    return (
        <div>
            {props.users.map(u =>
                <div className={styles.usersBlock} key={u.id}>
                    <div className={styles.avaBlock}>
                        <div className={styles.avaImage}>
                            <NavLink to={'/Profile/' + u.id}>
                                <img src={u.photos.small !== null ? u.photos.small : userAva} alt=""/>
                            </NavLink>
                        </div>
                        <div>{u.id}</div>
                        <div className={styles.followedBtn}>
                            {u.followed
                                ? <button disabled={
                                    props.disabledUsersFollow.some(id => id === u.id)}
                                          onClick={() => {props.unfollow(u.id)}
                                          }>Unfollow</button>
                                : <button disabled={
                                    props.disabledUsersFollow.some((id => id === u.id))}
                                          onClick={() => {props.follow(u.id)}
                                          }>Follow</button>}
                        </div>
                    </div>
                    <div className={styles.userPost}>
                        <div>
                            <h2>{u.name}</h2>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <h4>"u.location.country"</h4>
                            <h5>"u.location.city"</h5>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Users;
