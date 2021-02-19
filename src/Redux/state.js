import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _callSubscriber() {
        console.log('State changed')
    },
    _state: {
        profilePage: {
            posts:  [
                {id: 1, message: "Hi, how are you?", likesCount: "1342"},
                {id: 2, message: "Hello, men", likesCount: "3478"},
                {id: 3, message: "I'm steel alive", likesCount: "2443"},
                {id: 4, message: "Wazzzzzap", likesCount: "44200"}
            ],
            newPostText: 'Hello, Amigo!!!'
        },

        dialogsPage: {
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is your It-Kamasutra"},
                {id: 3, message: "Yo"},
                {id: 4, message: "How are you?"},
                {id: 5, message: "Wazzzap?"}
            ],

            newMessageText: 'im fine! and u?',

            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Valera'},
                {id: 3, name: 'Vova'},
                {id: 4, name: 'Jenya'},
                {id: 5, name: 'Kostya'},
                {id: 6, name: 'Misha'},
                {id: 7, name: 'Viktor'},
            ]
        },

        sideBarPage: {
            friendsItem: [
                {id: 1, name: 'Viktor'},
                {id: 2, name: 'Kostya'},
                {id: 3, name: 'Sergei'}
            ]}
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    getState() {
        return this._state
    },



    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sideBarPage = sidebarReducer(this._state.sideBarPage, action)

        this._callSubscriber(this)
    }
}



export default store;
