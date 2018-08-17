const initialState = {
    user: {}
    // user: {id: 2, user_name: "Spencer Ricks", email: "spencer.ricks9@gmail.com", auth_id: "github|36371678", picture: "https://avatars0.githubusercontent.com/u/36371678?v=4"}
}

const UPDATE_USER_DATA = 'UPDATE_USER_DATA'

export function updateUserData(user){
    return {
        type: UPDATE_USER_DATA,
        payload: user
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type){
        case UPDATE_USER_DATA:
            return Object.assign({}, state, {user: action.payload})
        default:
            return state;
    }
}