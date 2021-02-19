const ADD_MESSAGE = "ADD-MESSAGE"

export const addMessageAC = (newMessage) => ({type: ADD_MESSAGE, newMessage})

const initialState = {
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is your It-Kamasutra"},
            {id: 3, message: "Yo"},
            {id: 4, message: "How are you?"},
            {id: 5, message: "Wazzzap?"}
        ],
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Valera'},
            {id: 3, name: 'Vova'},
            {id: 4, name: 'Jenya'},
            {id: 5, name: 'Kostya'},
            {id: 6, name: 'Misha'},
            {id: 7, name: 'Viktor'},
        ]}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 8,
                message: action.newMessage
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        }
        default:
            return state;

    }
}


export default dialogsReducer;
