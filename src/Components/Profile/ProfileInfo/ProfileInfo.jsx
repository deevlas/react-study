import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus.jsx'

const ProfileInfo = (props) => {

    if(!props.userProfile) {
        return <Preloader/>
    }

    let contactsKeys = Object.keys(props.userProfile.contacts)
    let contactValue = contactsKeys.filter(c => props.userProfile.contacts[c])

    const dataSubmit = (dataForm) => {
        console.log(dataForm)
        // props.logIn(dataForm.login, dataForm.password, dataForm.rememberMe)
    }

    return (
        <div>
            <div>
                {props.isFetching ? <Preloader/> : null}
            </div>
            <div className={s.profileImage}>
                <img src="https://image.freepik.com/free-photo/friends-relaxing-on-the-beach_53876-1969.jpg" alt="ilusion"/>
            </div>
            <div className={s.userProfileBlock}>
                <div>
                    <div className={s.descriptionBlock}>
                        <img src={props.userProfile.photos.large} alt={''}/>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>{props.userProfile.fullName}</h2>
                    </div>
                    <div>
                        <ProfileStatus profileStatus={props.status} updateStatus={props.updateStatus} onSubmit={dataSubmit}/>
                    </div>
                    <div>
                        About Me: {props.userProfile.aboutMe}
                    </div>
                    <div>
                        Contacts:
                        {contactValue.map(c =>
                            <div> {c}: {props.userProfile.contacts[c]} </div>
                        )}
                    </div>
                    <div>
                        Looking For A Job: {props.userProfile.lookingForAJob}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ProfileInfo;
