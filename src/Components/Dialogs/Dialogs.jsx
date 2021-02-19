import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageFormRedux from "./AddMessageFormRedux";

const Dialogs = (props) => {

    const onSubmit = (dataForm) => {
        props.addMessage(dataForm.newMessage)
    }

    let dialogsElements = props.dialogsPage.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)

    let messagesElements = props.dialogsPage.messages
        .map(m => <Message message={m.message} id={m.id} key={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
                <div>
                    <AddMessageFormRedux onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    )
}



export default Dialogs;
