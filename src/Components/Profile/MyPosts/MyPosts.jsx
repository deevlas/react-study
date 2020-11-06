import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea name="" id="" cols="60" rows="5"></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message = 'Hi, how are you?'/>
                <Post message =  "i'm fine, thanks"/>
            </div>
        </div>
    )
}

export default MyPosts;
