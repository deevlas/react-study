import React, {useEffect, useState} from 'react';
import {reduxForm} from "redux-form";

let ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.profileStatus)

    useEffect(() => {
        setStatus(props.profileStatus)
    }, [props.profileStatus])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }


// componentDidUpdate(prevProps, prevState) {
//     if(prevProps.status !== this.props.status){
//         this.setState({
//             status: this.props.status
//         })
//
//     }
// }
    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{status || "No status"}</span>
            </div>}
            {editMode &&
            <div onSubmit={props.handleSubmit}>
                <input name='status' onChange={onStatusChange} autoFocus={true}
                       onBlur={deactivateEditMode} value={status}/>
            </div>}
        </div>
    )
}
ProfileStatus = reduxForm({form: "profileStatus"})(ProfileStatus)

export default ProfileStatus;
