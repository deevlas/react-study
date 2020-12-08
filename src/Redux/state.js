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


    getState() {
        return this._state
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state)
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },

    addMessage() {
        let newMessage = {
            id: 8,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state)
    },

    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state)
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;
