import React from "react";
import styles from "./FormControl.module.css"

export const Textarea = ({input, meta, ...props}) => {

    let hasError = meta.touched && meta.error

    return (
        <div>
            <div className={styles.blockTextarea}>
                <div className={hasError ? styles.error : ""}>
                    <textarea {...input} {...props} />
                </div>
                <div>
                    {hasError && <span className={styles.errorSpan} >{meta.error}</span>}
                </div>
            </div>
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {

    let hasError = meta.touched && meta.error

    return (
        <div>
            <div className={styles.blockInput}>
                <div className={hasError ? styles.error : ""}>
                    <input className={styles.loginInput} {...input} {...props} />
                </div>
                <div>
                    {hasError && <span className={styles.errorSpan}>{meta.error}</span>}
                </div>
            </div>
        </div>
    )
}


