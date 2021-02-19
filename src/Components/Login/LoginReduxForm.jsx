import React from 'react';
import {Field, reduxForm} from "redux-form";
import {required} from "redux-form-validators";
import {Input} from "../../assets/FormControl/FormControl";
import styles from "./login.module.css"


const LoginForm = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'login'}
                           name={'login'}
                           component={Input}
                           validate={[required()]}/>
                </div>
                <div>
                    <Field placeholder={'password'}
                           name={'password'}
                           component={Input}
                           validate={[required()]}/>
                </div>
                {props.error && <div>{props.error}</div>}
                <div className={styles.blockCheckbox}>
                    <label htmlFor={"rememberMe"}>RememberMe</label>
                    <div>
                        <label>
                            <Field type={'checkbox'}
                                   name={'rememberMe'}
                                   id={"rememberMe"}
                                   component={Input}/>
                        </label>
                    </div>
                </div>
                <div className={styles.submitBtn}>
                    <button>Submit</button>
                </div>
            </form>
        </div>

    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginReduxForm;
