import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile  = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" alt=""/>
            </div>

            <div className={s.ava}>
                <div className={s.prof}>
                    <img src="https://i.stack.imgur.com/kKcuz.png" alt=""/>
                    <div>
                        <div>
                            Name
                        </div>
                        <div>
                            info
                        </div>
                    </div>
                </div>
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;
