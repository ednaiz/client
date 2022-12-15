import * as actionType from './action'

const initialState = {
    currentUser: null,
}

export default (state = initialState, action) => {
    console.log(state,action)
    switch (action.type) {

        case actionType.LOGIN:

            return {
                ...state,
                currentUser: action.user
            }

        default:
            return state
    }
}
