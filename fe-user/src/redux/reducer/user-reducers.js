import { ADD_ADDRESS_USER } from "../action/type";

const INITIAL_STATE = {
    address_id: []
}

export const UserReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_ADDRESS_USER:
            return { ...state, address_id: action.payload }
        default:
            return state;
    }
}