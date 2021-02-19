import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../assets/FormControl/FormControl";
import {length} from "redux-form-validators";
import styles from "./Dialogs.module.css"

const addMessageForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field component={Textarea}
                       placeholder='Enter your message'
                       name='newMessage'
                       validate={[length({max: 8})]}
                />
                <div className={styles.sendBtn}>
                    <button>Send Message</button>
                </div>
            </form>
        </div>
    )
}

const AddMessageFormRedux = reduxForm({form: 'addMessage'})(addMessageForm);
export default AddMessageFormRedux;
