import {Field, reduxForm} from "redux-form";
import s from './MyPosts.module.css'
import React from "react";
import {Textarea} from "../../../assets/FormControl/FormControl";
import {length} from "redux-form-validators";
import styles from "./MyPosts.module.css"


const NewPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.postTextarea}>
                <Field component={Textarea} name='NewPost05'
                       placeholder='Enter your new post' validate={[length({max: 5,
                               msg: {max: `Symbols more {count, number}`}})
                ]}/>
                <div className={styles.addBtn}>
                    <button>Add post</button>
                </div>
            </div>
        </form>
    )
}

const NewPostFormRedux = reduxForm({form: 'NewPost'})(NewPostForm);

export default NewPostFormRedux;
