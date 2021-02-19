import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import NewPostFormRedux from "./MyPostFormRedux"


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} id={p.id}/>)
    const onSubmit = (dataForm) => {
        props.addPost(dataForm.NewPost05)
    }

    return (
        <div className={s.postsBlock}>
            <h2>My Posts</h2>
            <div>
                <NewPostFormRedux onSubmit={onSubmit}/>
                <div>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}


export default MyPosts;
